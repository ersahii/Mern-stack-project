import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNo: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },

})
// securing the password using bcrypt
userSchema.pre("save", async function (next) {
    const user = this;
    if(!user.isModified("password")){
        next();
    }
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(user.password, salt);
        user.password = hashPassword;       
    } catch (error) {
        next(error)
    }
})
// comparing password using bcrypt compare
userSchema.methods.comparePassword =async function(password){
    return bcrypt.compare(password , this.password);
}
// JSON web token (ALWAYS STORE ON LOCAL STORAGE NOT ON SERVER SIDE)
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email , 
            isAdmin : this.isAdmin
        }, process.env.JWT_SECRET_KEY , {
            expiresIn: "30d"
        }) 
    } catch (error) {
        console.error(error);
    }
}
// define the model or the collection name 
const User = new mongoose.model("User", userSchema);
export default User;