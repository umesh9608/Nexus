import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function ColorFul() {
   const [color, setColor] = useState("black");
  console.log("first") //spand time in this log and show console form logic(magic)
  // document.body.style.backgroundColor = color;//ye line will change the background color of the body based on the state variable 'color'
  //so we use useEffect hooks
 
  
   useEffect(()=>{  //useEffect(callback function, dependency array)
     //this will run after the component is mounted and whenever 'color' changes
     console.log("useEffect Executed");
     document.body.style.backgroundColor = color;
   },[color]); //this will run only when 'color' changes
 
   console.log("Second")
 
   return (
     <>
       <h1>Background Color Changer</h1>
       <div className="but">
         <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
         <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
         <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
         <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
         <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
       </div>
     </>
   );
}

export default React.memo(ColorFul); //.memo is used to prevent unnecessary re-renders of the component
// React.memo is a higher-order component that memoizes the result of a functional component
// and prevents it from re-rendering if its props have not changed.
// it is used to optimize performance by avoiding unnecessary re-renders of the component




//note re-render ka matlab fun ko dubara call krna
//note:-useEffect hook is used to perform side effects in functional components
//     it means pura code ek bar run(render) hone ke badd jo calback function hai wo run  krta hai (sabse last me execute hota hai)

// ek to initial render ke time pe run hota hai uske baad jab bhi dependency array me jo variable hai wo change hota hai tab wo run hota hai[color]

//useEffect q important hai:-