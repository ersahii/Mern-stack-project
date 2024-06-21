const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const router = require("./router/auth-router")
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true}));
app.use("/api/auth" , router)
app.listen(port , ()=>{
    console.log("Server started at port" , port);
})
