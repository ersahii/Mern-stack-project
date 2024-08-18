import express from "express";
import connectDb from "./utils/db.js";
import router from "./router/auth-router.js"
import errorMiddleware from "./middlewares/error-middleware.js";
import contactRouter from "./router/message-router.js"
const app = express();
const PORT = 3000;
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form" , contactRouter);
app.use(express.urlencoded({extended: true}))
app.use(errorMiddleware)
connectDb().then(()=>{
    app.listen(PORT ,()=>{
        console.log(`Server started at port ${PORT}`);
    })
});
