const  home=async (req , res)=>{
    try {
        res.status(200).send("hello from home page controllers");
    } catch (error) {
        console.log(error)
    }
}
const  register = async (req , res)=>{
    try {
        res.status(200).send("hello from register page");
    } catch (error) {
        console.log(error)
    }
}
module.exports = {home, register};