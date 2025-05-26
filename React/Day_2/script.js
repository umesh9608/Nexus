// const element = React.createElement("h1", {}, "hello coder army");

// // ReactDOM.render(element,document.getElementById("root")); //- It doesn't support React 18 features like concurrent rendering
// const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// Reactroot.render(element); //- Enables concurrent rendering (faster UI updates)


//********in this code i want to wrap all tag(h1,h2) code inside a single div
// const element = React.createElement("h1", {id:"first",className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}}, "hello coder army");
// const element2 = React.createElement("h2", {id:"second",className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}}, "hello coder army maja aya");

// const div1 = React.createElement('div', {}, [element,element2]);

// const Reactroot = ReactDOM.createRoot(document.getElementById("root"));

// Reactroot.render(div1);

/* *********now i want to children>children>children..... div make like
 <div> <div> <h1> <p> hi coder </div> </div> </h1> </p> this is called jsx it come babel*/

const element = React.createElement("h1", {id:"first",className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}}, "hello coder army");
const element2 = React.createElement("h2", {id:"second",className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}}, "hello coder army maja aya");

const div1 = React.createElement('div', {}, [element,element2]);

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));

Reactroot.render(div1);