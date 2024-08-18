import express from "express";
const router = express.Router();
import {signupSchema , loginSchema} from "../validators/auth-validator.js"
import { validate } from "../middlewares/validate-middleware.js";
import {home , register , login} from "../controllers/auth-controllers.js"
router.route("/").get(home);
router.route("/register").post(validate(signupSchema),register);
router.route("/login").post(validate(loginSchema) ,login);
export default router;