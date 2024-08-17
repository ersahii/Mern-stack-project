require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/db");
const app = express();
const port = 3000;
const router = require("./router/auth-router")
app.use(express.json());
app.use("/api/auth", router)
connectDb().then(() => {
    app.listen(port, () => {
        console.log("Server started at port", port);
    })
});
