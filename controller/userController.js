const { User } = require("../model/userData")



const userController = {

    addUser: async (req, res) => {
        try {
            const { name, phoneNumber } = req.body;
            console.log('addUser Controller', name, phoneNumber);
            const newUser = await User.create({
                name: name,
                phoneNumber: phoneNumber
            })
            console.log(newUser)
            res.status(201).json(newUser);
        } catch (error) {
            console.error("Error while adding a new user:", error);
            res.status(500).json({ errorMsg: "Failed to add a new user." });
        }
    },

    getUser: async (req, res) => {
        try {
            const { userId } = req.body;
            const user = await User.findById(userId);
            if (!user) {
                res.status(500).json('Didnt find user');
            }
            res.status(201).json(user);
        } catch (error) {
            console.error("Error while adding a new user:", error);
            res.status(500).json({ errorMsg: "Failed to add a new user." });
        }
    },

}

module.exports = userController;
