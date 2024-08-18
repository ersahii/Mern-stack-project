import {z} from "zod";
//creating object Schema 
const signupSchema = z.object({
    username: z
    .string({required_error: "username is required"})
    .trim()
    .min(3 , {message: "username must be atleast of 3 characters"})
    .max(255 , {message: "username must not be more than 255 characters"}),
    email:  z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid Email address"})
    .min(3 , {message: "email must be atleast of 3 characters"})
    .max(255 , {message: "email must not be more than 255 characters"}),
    phoneNo:  z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10 , {message: "phone must be atleast of 10 characters"})
    .max(20 , {message: "phone must not be more than 20 characters"}),
    password:  z
    .string({required_error: "Password is required"})
    .min(7 , {message: "password must be atleast of 7 characters"})
    .max(1024 , {message: "password must not be more than 1024 characters"}),
});
const loginSchema = z.object({
    email: z.string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid Email address"})
    .min(3 , {message: "email must be atleast of 3 characters"})
    .max(255 , {message: "email must not be more than 255 characters"}),
    password :    z
    .string({required_error: "Password is required"})
    .min(7 , {message: "password must be atleast of 7 characters"})
    .max(1024 , {message: "password must not be more than 1024 characters"}),
})
export {signupSchema , loginSchema}