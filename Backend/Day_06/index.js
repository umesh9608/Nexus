//  we use num i nodemon to automatic run server
// for globally install use npm i -g  nodemon if not work the use sudo npm i -g  nodemon
// for sterver start type nomemon (file name).js
 const express = require("express") /*This imports the Express module from node_modules.

express is a popular Node.js framework used to build web servers and APIs.

You're storing it in the variable express. */
 const app =express(); /*  use it to define routes, handle requests, start the server, etc.*/



/* app.use(path, callback) means:
👉 When someone visits the path,
👉 run the callback function.*/


//  app.use((req,res)=>{
//     // res.send("Hello Backend Developer"); //we can pass anything
//     res.send({"name":"umesh", "age":20})
//  })

// -------if use route the use----
//note  line no 14 to  28 create route the this is main page only show if i chage path  but when i remove main page i mean (/) page then /home /about path work and ui change if we want to solve this problem the / page move on the bottom
//  app.use("/",(req,res)=>{
   
//     res.send("this is main page")
//  })

 app.use("/home",(req,res)=>{    // Define what to do when someone visits the root URL
   /* takes a callback because Express needs to know what to do when someone visits /home — like sending a response.
   
Without the callback, it wouldn’t know how to handle the request.*/
   
    res.send("This is home page")
 })

  app.use("/about",(req,res)=>{
   
    res.send("This is home about")
 })


 app.listen(4000,()=>{   // // Start the server on port 3000
    console.log("Server listening at port 4000");
 })
