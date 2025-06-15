const http = require("http");
 

const server = http.createServer((req,res)=>{
    // res.end("hello backend developer");


    // ------create route----- line 8 to 18
    if(req.url == "/"){
        res.end("Hello dackend learner")
    }else if(req.url == "/contact"){
        res.end("This is our contact page")
    }else if(req.url == "/about"){
        res.end("This is our About page")
    }else{
        res.end("Error : page not found")
    }
});


server.listen(4000,()=>{
    console.log("server run on 4000")
});