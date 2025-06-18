const express = require("express");
const app = express();

//learn middleware

app.use("/user",(req,res)=>{
    res.send("learn middleware")
},
(req,res)=>{
    res.send("Hello i am second");
})







app.listen(3000, () => {
    console.log("Server run on the port 3000");
})


//36.9