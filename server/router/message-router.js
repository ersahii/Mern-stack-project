import express from "express";
const contactRouter = express.Router();
import {contact} from "../controllers/message-controller.js";
contactRouter.route("/contact").post(contact);
export default contactRouter;