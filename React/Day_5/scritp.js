import React from "react";
import ReactDOM from "react-dom/client"


//create normal variable
const elememt1 = <h1>say hello</h1>

//create obj
let obj = {
    name:"suman",
    age:50
}

//creat array
const arr = [20,40,60]

//create function (in js function name g is not complusary)
// function greet(name) {
//     return <h2>now i create function {name}</h2>
// }; 
//in jsx function name G in complusary (because <div>,<h1>,<ul> this is html tag  but <Greet> ,... this is user defined tag
// function Greet() {
//     return <h2>now i create function </h2>
// };

//now i create function and pass argument like props (props)
function Greet(props) {
    return <h2>now i create function {props.name} {props.age} </h2>
};


const  Root = ReactDOM.createRoot(document.getElementById('root'));
// Root.render(elememt1); //create normal variable call
// Root.render(greet("Coder"));//function call
// Root.render(<Greet/>) //jsx like function
Root.render(<Greet name="suman" age="34"/>);//props function call
// Root.render(obj.name);
// Root.render(arr);











