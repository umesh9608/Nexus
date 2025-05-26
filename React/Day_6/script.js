// import React from "react";
// import reactDOM from "react-dom/client";

// function Counter() {
//   let Count = 0;
//   function incNum() {
//     Count = Count + 1;
//     console.log(Count); //to check value increase or not (here count value change but not update dom)
//     // document.querySelector("h1").innerText = `Count is ${Count}`; //this manuplate DOM (react khata h khud se dom manulante nhi kra react optmize way ye kaam kr deta hai)
//   }

//   function decNum() {
//     Count = Count - 1;
//     console.log(Count);
//     // document.querySelector("h1").innerText = `Count is ${Count}`;
//   }
//   return (
//     <div className="first">
//       <h1>Count is:{Count}</h1>
//       <button onClick={incNum}>Increment{Count}</button> {/* here is not possible to change data , so now here comes props/hooks */}
//       <button onClick={decNum}>Decrement{Count}</button>
//     </div>
//   );
// }

// reactDOM.createRoot(document.getElementById("root")).render(<Counter />);


// ______________ue use UseState__________
/*  useState is a React hook used to add state to a functional component
    It returns an array: [currentValue, updaterFunction]
    Here, count is the state variable initialized to 0
    setcount is the function used to update the value of count */
import React, { useState } from "react";
import reactDOM from "react-dom/client";


function Counter() {
  let [count, setcount] = useState(0); //useState() give retarn a array (count(0 jeyga count ke ander or phir, setSount(ek fun hai) jo o ko update kr dega 1 se phire count ke ander 1 pr same.... ))
    function incNum(){
        // count = count+1;
        // setcount(count);
        setcount(count+1) //also we write this
        console.log("count value is: ", count)
    }

     function decNum(){
        count = count-1;
        setcount(count);
        console.log("count value is: ", count)
    }


     return (
    <div className="first">
      <h1>Count is:{count}</h1>
      <button onClick={incNum}>Increment{count}</button>{/* here is not possible   to change data , so now here comes props */}
      <button onClick={decNum}>Decrement{count}</button>
    </div>
  );
}


reactDOM.createRoot(document.getElementById("root")).render(<Counter />);
