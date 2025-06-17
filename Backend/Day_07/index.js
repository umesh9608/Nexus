const express = require("express")
const app = express();
//parsing  using post method that's why we write   app.use(express.json())  aha pe ek concept ata hai josn vs js Object
// we use because Because it allows Express to read JSON data sent from frontend or API clients (like Postman). if not use then show  req.body will be undefined
app.use(express.json())


//  app.use("/user",(req,res)=>{  
//     res.send("hello backend developler")
//  })
//get,post,patch,put,delete

// app.get("/user", (req, res) => {
//    res.send({ name: "rohit" })
// })

// app.post("/user", (req, res) => {
//    console.log(req.body)
//    res.send("Data saved succeffully");
// })


//_____________create a book sotore_____________
const BookStore = [
   {
      id: 1,
      name: "The Alchemist",
      author: "Paulo Coelho"
   },
   {
      id: 2,
      name: "Wings of Fire",
      author: "A.P.J. Abdul Kalam"
   },
   {
      id: 3,
      name: "Ikigai",
      author: "Francesc Miralles"
   },
   {
      id: 4,
      name: "Atomic Habits",
      author: "James Clear"
   }
]

app.get("/book", (req, res) => {
   res.send(BookStore);
})

//if i want to access by id then use params like
app.get("/book/:id", (req, res) => {
   //  console.log(req.params);
   //  res.send(" ye lijiye");

   const id = parseInt(req.params.id); //Because req.params.id is a string by default — even if the URL has a number. we use ParseInt to convert the string "3" into a number
   console.log(typeof req.params.id) //string  that's why we use parseInt
   const Book = BookStore.find(info => info.id === id);
   res.send(Book)
})

app.post("/book",(req,res)=>{ //add new data on BookStore
   BookStore.push(req.body);
   res.send("Data saved suceffuly"); //this not show on BoosStore array but you check localhost:4000/book  but when we re-start the server then remove the id 4 on ram so now we need to to store data on database like mongoose
})

app.listen(4000, () => {
   console.log("Server listening at port 4000");
})
