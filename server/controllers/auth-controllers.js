// Homepage logic 
import User from "../models/user-model.js";
// import bcrypt from "bcryptjs";
const home = async (req, res) => {
    try {
        res.status(200).json({ "message": "Hello from homepage" });
    } catch (error) {
        res.status(500).json("internal server error")
    }
}
// registration logic 
const register = async (req, res) => {
    try {
        const { username, password, email, phoneNo } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400).json({ "message": "email already exists" })
        }
        const userCreated = new User({
            username,
            email,
            password,
            phoneNo
        })
        await userCreated.save();
        res.status(201).json({
            "message": `registration successfull`,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
        return
    } catch (err) {

        res.status(500).json("internal server error")
    }
}
// user Login Logic 
const login = async(req , res)=>{
    try {
        const {email , password} = req.body;
        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(400).json({"message": "Invalid credentials"})
        }
        // const checkPassword = await bcrypt.compare(password , userExists.password);
        const isPwdCorrect = await userExists.comparePassword(password);
        if(isPwdCorrect){
            res.status(200).json({
                msg: "login Succesfull",
                token : await userExists.generateToken(),
                userId : userExists._id.toString()
            })
        }
        else{
            res.status(401).json({"message" : "invalid email or password"});
        }
    } catch (error) {
        next(error)
        res.status(500).json("internal server error")
    }
}

export { home, register, login};