const { User } = require("../model/userData")

const sendMail = require("../utils/sendMail")

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const {
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
} = process.env;

const authController = {

    verifyAuth: async (req, res) => {
        console.log('auth controller');
        try {
            const user_id = '64cc3f9805be4f275c695cc7';
            const isTokenPresent = true;
            if (isTokenPresent) {

            } else if (!isTokenPresent) {
                return res.status(401).json({ msg: "Please Login to continue !" });
            }

            res.status(200).json({
                userId: user_id,
                accessToken: 'yH2dE7xJ9uP4vM6rA0iK3zF1wL8qG5nB4dC1oL6m'
            });

        } catch (error) {
            res.status(401).json({});
        }
    },
    // -------------------------------------------------------------------------------------------
    signInUser: async (req, res) => {
        try {
            const { emailAddress } = req.body;
            console.log(emailAddress);

            if (!emailAddress) {
                return res.status(400).json({ errorMsg: 'Please provide an emailAddress.' });
            }

            if (!isValidEmail(emailAddress)) {
                return res.status(400).json({ errorMsg: 'Invalid email address.' });
            }

            const user = await User.findOne({ emailAddress });

            if (!user) {
                return res.status(401).json({ errorMsg: 'Not yet Registered. Sign Up Please !' });
            }

            const { otp, hashedOTP, expiryTime } = await generateOTP();
            user.otp = hashedOTP;
            user.otpExpiry = Date.now() + 180000; // Set OTP expiry to 3 minutes from now
            await user.save();


            const otpDigits = otp.toString().split('').map(Number);

            try {
                await sendMail(emailAddress, otpDigits);
                res.status(200).json({ message: 'OTP sent to your email.' });
            } catch (error) {
                console.error('Error in sending OTP email:', error);
                res.status(500).json({ errorMsg: 'Error sending OTP email. Please try again later.', actualError: error.message });
            }

            // res.status(200).json({ message: 'OTP sent to your email.' });

        } catch (error) {
            console.error('Error in signInUser:', error);
            res.status(500).json({
                errorMsg: 'Error at signInUser controller',
                actualError: error.message,
            });
        }
    },


    // -------------------------------------------------------------------------------------------

    signUpUser: async (req, res) => {
        try {
            const { fullName, emailAddress, country } = req.body;
            console.log(fullName, emailAddress, country);

            if (!fullName || !emailAddress || !country) {
                return res.status(400).json({ errorMsg: 'Please provide fullName, emailAddress, and country.' });
            }

            if (!isValidEmail(emailAddress)) {
                return res.status(400).json({ errorMsg: 'Invalid email address.' });
            }

            const existingUser = await User.findOne({ emailAddress });
            if (existingUser) {
                return res.status(409).json({ errorMsg: 'User already exists.' });
            }

            const { otp, hashedOTP, expiryTime } = await generateOTP();


            const newUser = await User.create({
                fullName,
                emailAddress,
                country,
                otp: hashedOTP,
                otpExpiry: expiryTime,
            })


            const otpDigits = otp.toString().split('').map(Number);

            try {
                await sendMail(emailAddress, otpDigits);
                res.status(200).json({ message: 'OTP sent to your email.' });
            } catch (error) {
                console.error('Error in sending OTP email:', error);
                res.status(500).json({ errorMsg: 'Error sending OTP email. Please try again later.', actualError: error.message });
            }
        } catch (error) {
            console.error('Error at signUpUser controller:', error);
            res.status(500).json({
                errorMsg: 'Error at signUpUser controller',
                actualError: error.message,
            });
        }
    },
    //-----------------------------------------------------------------------------------------------------
    verifyOtp: async (req, res) => {
        try {
            const { otp, emailAddress } = req.body;

            if (!otp) {
                return res.status(400).json({ errorMsg: "OTP is required." });
            }
            console.log('otp verfiy', emailAddress);

            if (!emailAddress) {
                return res.status(400).json({ errorMsg: "User email not found." });
            }

            const user = await User.findOne({ emailAddress: emailAddress });

            if (!user) {
                return res.status(404).json({ errorMsg: "User not found." });
            }

            if (!user.otp || !(await bcrypt.compare(otp, user.otp))) {
                return res.status(400).json({ errorMsg: "Invalid OTP.Try signing again" });
            }

            if (user.otpExpiry && user.otpExpiry < Date.now()) {
                return res.status(400).json({ errorMsg: "OTP has expired. Try signing again" });
            }

            user.otp = undefined;
            user.otpExpiry = undefined;
            await user.save();

            const tokenPayload = {
                fullName: user.fullName,
                email: user.emailAddress,
                userId: user._id.toString(),
                country: user.country
            };

            // Generate access token and refresh token
            const accessToken = createAccessToken(tokenPayload);
            const refresh_token = createRefreshToken(tokenPayload);


            // path: "/api/auth/checkUserAuth",



            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                secure: true,
                sameSite: 'None',
                path: "/api/auth/checkUserAuth",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            });

            console.log('OTP VERIFIED');
            return res.status(200).json({ message: "OTP verified successfully.", accessToken, userId: user._id, username: user.fullName, country: user.country });
        } catch (error) {
            console.error("Error in verifyOtpController:", error);
            return res.status(500).json({ errorMsg: "Server error." });
        }
    },

    // -----------------------------------------------------------------------------------------------------------------------------------
    checkAuth: async (req, res) => {
        try {

            const rf_token = req.cookies.refreshtoken;

            console.log('checkAuth :', rf_token)

            if (!rf_token) {
                return res.status(401).json({ errorMsg: "Refresh token not found." });
            }


            const decodedRefreshToken = jwt.verify(rf_token, REFRESH_TOKEN_SECRET);

            if (!decodedRefreshToken) {
                return res.status(401).json({ errorMsg: "Invalid or expired refresh token." });
            }

            const userId = decodedRefreshToken.userId;
            const fullName = decodedRefreshToken.fullName;
            const email = decodedRefreshToken.email;
            const country = decodedRefreshToken.country;

            const tokenPayload = {
                fullName: fullName,
                email: email,
                userId: userId,
                country: country
            };

            const newAccessToken = createAccessToken(tokenPayload);

            return res.status(200).json({ message: "Authentication successful.", accessToken: newAccessToken, userId, username: fullName, country });
        } catch (error) {
            console.error("Error in checkAuthController:", error);
            res.status(500).json({ errorMsg: "Server error at checkAuth controller." });
        }
    },
    //-------------------------------------------------------------------------------------------------------------------
    logout: async (req, res) => {
        try {
            // console.log('at logout controller')
            res.clearCookie("refreshtoken", {
                path: "/api/auth/checkUserAuth"
            });
            return res.status(200).json({ msg: "Successfully Logged out" });
        } catch (error) {
            // console.log("error at logout controller", error);
            return res.status(404).send(error);
        }
    },
    // -------------------------------------------------------------------------------------------------------------------------------
    resendOtp: async (req, res) => {
        try {

            const { emailAddress } = req.body;

            console.log('resend Otp controlller', req.body, emailAddress)

            if (!emailAddress) {
                return res.status(400).json({ errorMsg: "Please Login Again" });
            }


            if (!isValidEmail(emailAddress)) {
                return res.status(400).json({ errorMsg: 'Invalid email address.' });
            }

            const user = await User.findOne({ emailAddress });

            if (!user) {
                return res.status(401).json({ errorMsg: 'You are not registered yet.' });
            }

            const { otp, hashedOTP, expiryTime } = await generateOTP();
            user.otp = hashedOTP;
            user.otpExpiry = Date.now() + 180000; // Set OTP expiry to 3 minutes from now
            await user.save();

            const otpDigits = otp.toString().split('').map(Number);



            try {
                await sendMail(emailAddress, otpDigits);
                res.status(200).json({ message: 'OTP Resent sent to your email.' });
            } catch (error) {
                console.error('Error in sending OTP email:', error);
                res.status(500).json({ errorMsg: 'Error sending OTP email. Please try again later.', actualError: error.message });
            }
        } catch (error) {
            console.error("Error in resent OtpController:", error);
            return res.status(500).json({ errorMsg: "Server error." });
        }
    },
}

// ----------------------------------------------------------
const generateOTP = async () => {
    // Generate a random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Get the current timestamp in milliseconds
    const currentTime = Date.now();

    // Set the OTP expiry time to 2 minutes (120 seconds)
    const expiryTime = currentTime + 120000;

    // Hash the OTP before saving it to the database
    const hashedOTP = await bcrypt.hash(otp.toString(), 10);

    // console.log(otp, hashedOTP, expiryTime);
    return { otp, hashedOTP, expiryTime };
};


const isValidEmail = (email) => {
    // Regular expression pattern for validating email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
};

function createAccessToken(payload) {
    return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
    // return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: "30s" });
}


function createRefreshToken(payload) {
    return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "2d" });
    // return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "60s" });
    // return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: "2m" });
}



module.exports = authController;