
const user = require("../conf/schemas/userSchema");

const get = async (req, res) => {

    try {
        users = await user.find()
        res.status(200).json({ "message": users })
        // res.sed("hy")

    } catch (error) {
        res.status(201).json({ "message": error })

    }

}
const post = async (req, res) => {
    const { name, password, email } = req.body

    try {
        const userExist = await user.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "email already exists" })
        }
        const userCreated = await user.create({ name, email, password })
        res.status(201).json({ message: "User created", user: userCreated });

    } catch (error) {
        res.status(201).json({ "message": error })

    }

}
const Delete = async (req, res) => {

    try {
        const { _id } = req.body

        const data = await user.findByIdAndDelete({ _id });
        res.status(201).json({ "message": "User deleted" })
        console.log("user deleted")


    } catch (error) {
        res.status(201).json({ "message": error })


    }

}
const update = async (req, res) => {

    try {
        const { _id, name, password, email } = req.body

        const data = await user.findByIdAndUpdate(_id, { name, password, email }, { new: true });
        res.status(201).json({ "message": "User updated" })
        console.log("user updated")


    } catch (error) {
        res.status(201).json({ "message": error })


    }


}

module.exports = { get, post, Delete, update }