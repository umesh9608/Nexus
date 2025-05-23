// Create element through JavaScript manually
/* what you learned: How to create HTML element manyally with js*/

// const header1 = document.createElement('h1');
// header1.innerText = "hello coder army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h2');
// header2.innerText = "hello coder kaise ho aap sab";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "30px";
// header2.style.color = "white";

// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);

// Learning:
// - How to create and style elements using JS
// - How to append elements to the DOM
// - Repeating code when creating multiple elements

/* now if i want to creat one header then we repeat copy past but i want to applay automate  */
//so i want to creat function like this


//Note React: Object
//ReactDOM: Object


/* What you learnd; How React works internally(your own mini version of react.createElement and ReactDom.render).*/
// React-like custom object
const React = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);

    if (typeof children === 'object') {
      for (let value of children) element.append(value);
    } else {
      element.innerText = children;
    }

    for (let key in styles) {
      element.style[key] = styles[key];
    }

    return element;
  },
};

// ReactDOM-like custom object
const ReactDom = {
  rennder: function (element, root) {
    root.append(element);
  }
};

// Create heading elements
const header1 = React.createElement(
  "h1",
  { fontSize: "30px", backgroundColor: "blue", color: "white" },
  "hello coder army"
);

const header2 = React.createElement(
  "h1",
  { fontSize: "30px", backgroundColor: "blue", color: "white" },
  "hello coder army kaise ho aap log"
);

// Create list items and a list
const li1 = React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JavaScript");

const ul = React.createElement(
  "ul",
  { fontSize: "30px", backgroundColor: "blue", color: "white" },
  [li1, li2, li3]
);

// Render all elements
const root = document.getElementById("root");
ReactDom.rennder(header2, root);
ReactDom.rennder(header2, root);
ReactDom.rennder(ul, root);

//  Learning:
// - DRY approach using reusable function (like React)
// - Simulating JSX behavior
// - How props and children are handled
// - Grouping UI elements and rendering dynamically
