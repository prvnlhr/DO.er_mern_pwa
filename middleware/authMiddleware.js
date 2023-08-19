const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    try {
        // Extract the access token from the "Authorization" header
        const token = req.header("Authorization")?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ errorMsg: "Access denied, token missing" });
        }

        // Verify the token and decode user information
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                if (err.name === "TokenExpiredError") {
                    // console.log(err)
                    return res.status(401).json({ errorMsg: "Token has expired" });
                } else if (err.name === "JsonWebTokenError") {
                    // console.log(err)
                    return res.status(401).json({ errorMsg: "Invalid token" });
                }
            }

            // Attach the decoded user to the request for later use
            req.user = user;
            next();
        });
    } catch (error) {
        console.error("Error in auth middleware:", error);
        return res.status(500).json({ errorMsg: "Error in auth middlewarer" });
    }
};

module.exports = authMiddleware;
