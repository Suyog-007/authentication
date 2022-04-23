require('dotenv').config();
const express = require('express');
const app = express();
const cors=require('cors');
const connection = require('./db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//database conncection
connection();

//middlewares
app.use(express.json());
const corsOptions={
    origin:"*",
    credentials: true,
    optionSuccessStatus:200,
  }
app.use(cors(corsOptions));
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes)


const port =process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Listening to port 8080");
});