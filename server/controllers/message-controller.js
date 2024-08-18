import Contact from "../models/contact-model.js";
// contact form logic 
const contact = async (req , res)=>{
    try {
        const {username , email , message} = req.body;
        const contactForm = new Contact({
            username, 
            email , 
            message
        })
        await contactForm.save();
        res.status(200).json({ "message" : "Message sent successfully"});
    } catch (error) {
        res.status(500).json({message : "Error in sending message"})
    }
}
export {contact};