/* Learn Curd operaion create,put,update,delete*/
const express = require("express")
const app = express();
// import { Auth } from "./middleware/auth";
const { Auth } = require("./middleware/auth")
app.use(express.json()) // if we not usee and try to add some value on FoodMenu the show null so we use it (post mehod)
//Database array
const FoodMenu = [
    { id: 1, food: "Chowmein", category: "veg", price: 500 },
    { id: 2, food: "Chicken Biryani", category: "non-veg", price: 180 },
    { id: 3, food: "Paneer Butter Masala", category: "veg", price: 150 },
    { id: 4, food: "Mutton Curry", category: "non-veg", price: 250 },
    { id: 5, food: "Veg Burger", category: "veg", price: 90 },
    { id: 6, food: "Egg Roll", category: "non-veg", price: 70 },
    { id: 7, food: "Fried Rice", category: "veg", price: 100 },
    { id: 8, food: "Fish Fry", category: "non-veg", price: 200 },
    { id: 9, food: "Spring Roll", category: "veg", price: 120 },
    { id: 10, food: "Chicken Momos", category: "non-veg", price: 110 }
];

//jab user add to card krega to AddToCard array me ayega
const AddToCart = [];

app.get("/food", (req, res) => {
    res.status(200).send(FoodMenu);
})

//Authenticate admin here  (ager hm ese alag nhi rkhte to hme get, post,delete,patch sb ke ander likhna pdta)
app.use("/admin", Auth)

app.post("/admin", (req, res) => {
   
    FoodMenu.push(req.body);
    res.status(201).send("Item Added sussefully");
   
})


app.delete("/admin/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = FoodMenu.findIndex(item => item.id === id);

    if (index === -1) {
        res.send("Item doeesn't exist");
    } else {
        FoodMenu.splice(index, 1);
        res.send("Item deleted succefully")
    }
})


app.patch("/admin", (req, res) => {
    const id = req.body.id;  //selcet the element so in this code give me id
    const fooddata = FoodMenu.find(item => item.id === id); //

    if (fooddata) {
        if (req.body.food)
            fooddata.food = req.body.food;
        if (req.body.category)
            fooddata.category = req.body.category;
        if (req.body.price)
            fooddata.price = req.body.price;
    } else {
        res.send("Item not exist");
    }
})


//kise item ko card ke ander add krna
app.post("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const foodItem = FoodMenu.find(item => item.id === id);

    if (foodItem) {
        AddToCart.push(foodItem);
        res.status(200).send("Item added successfully");
    } else {
        res.send("Item out of stock");
    }
});


//delete item on card
app.delete("/user/:id", (req, res) => {
    try{
    const id = parseInt(req.params.id);
    const index = AddToCart.findIndex(item => item.id === id); //findIndex method return index of item
    if (index != -1) {
        AddToCart.splice(index, 1);
        res.send("Item remove succefully");
    } else {
        res.send("Item is not present in Cart");
    }}
    catch(error){
        res.send("Some error: " + error);
    }
})

//look at my cartItems
app.get("/user",(req,res)=>{
    if(AddToCart.length == 0) {
        res.send("Cart is empty");
    }else{
    res.send(AddToCart);
    }
})

//now we learn error handling using middleware
// app.get("/dummy",(req,res)=>{  //check localhost:3000/dummy
//     JSON.parse("Invalid JSON"); //this line will throw an error (es error ko handle nhi kiya to server crash ho jayega) so use try catch block 
//     res.send("This is dummy route");
// })


//useing try catch block for error handling
app.get("/dummy", (req, res) => {
    try {
        JSON.parse("Invalid JSON"); //this line will throw an error (es error ko handle nhi kiya to server crash ho jayega) so use try catch block 
        //valid json is like this JSON.parse('{"name":"John"}');
        res.send("This is dummy route");
    } catch (error) {
        res.status(500).send("some Error occure"+ error.message);
    }
})


app.listen(3000, () => {
    console.log("Server listening at port 3000");
})


//Authentication : check kran ko existing user hai i nhi
//Authorazation: manlo hm login kr liye  to ab mare pass kya kya power hai or mai kya kya kr skta hun eg kise ke post me like,comment,share kr skte h bt uske post ko delete nhi kr skte h

//ager hm JSON.parcse(JSON) se data bhej skta hu to why we use express.json()