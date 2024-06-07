const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const {UserRoute, BlogRouter} = require("./routes");

const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(express.json());

mongoose.connect(`${MONGO_URI}bloggingApp`)
.then(()=>{
    console.log("Connected to data base");
})
.catch((err)=>{
    console.log(err)
});

app.use(UserRoute);
app.use(BlogRouter)

app.use("/*",(req,res)=>{
    res.status(404).json({
        message : `CANNOT GET ${req._parsedUrl.path}`
    })
})

app.listen(PORT,()=>{
    console.log(`Server up and running at port `,PORT);
})