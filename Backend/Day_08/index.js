const express = require("express")
const app = express();

app.use(express.json())

const BookStore = [
    {
        id: 1,
        name: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        id: 2,
        name: "Wings of Fire",
        author: "Kalam"
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
    },
    {
        id: 5,
        name: "Wings of Fire",
        author: "Kalam"
    },
]

//if i want to use filter mean jis jis ka author same ho us data ko access krna h
app.get("/book", (req, res) => {
  const Book = BookStore.filter(info => info.author === req.query.author);
  res.send(Book);
});


//if i want to access book by id
app.get("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const Book = BookStore.find(info => info.id === id);
    res.send(Book)
})


//add new data on BookStore
app.post("/book", (req, res) => {
    BookStore.push(req.body);
    res.send("Data saved suceffuly");
})



// patch use for if we want to change some existing data
app.patch("/book", (req, res) => {
    // console.log(req.body);
    // const Book = BookStore.find(info=> info.id === req.body.id);
    // Book.author = req.body.author;
    // res.end("patch updated");

    /*ager author kuch bhi data bhej de jo key nhi h jaise id,author,name ke jegha kuch bhi ya phir ned data */
    const Book = BookStore.find(info => info.id === req.body.id);
    if (req.body.author)
        Book.author = req.body.author;

    if (req.body.name)
        Book.name = req.body.name;
    res.end("patch updated");

})

//same kaam hm put se kr skte es ka mtlab mh hm sabhi ko change kr rhe h
app.put("/book", (req, res) => {
    const Book = BookStore.find(info => info.id === req.body.id);

    Book.author = req.body.author;
    Book.name = req.body.name;

    res.send("change  updated succefully");
})


//Delete by id
app.delete("/book/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = BookStore.findIndex(info => info.id === id);
    BookStore.splice(index, 1);  // delete 1 item at found index
    res.send("Book deleted successfully");
});



app.listen(4000, () => {
    console.log("Server listening at port 4000");
})

