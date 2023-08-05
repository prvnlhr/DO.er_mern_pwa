const { User } = require("../model/userData")



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

        }
    }
}

module.exports = authController;
