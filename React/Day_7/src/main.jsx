import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import ColorFul from "./Component/ColorFul";
function Main() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <h1>Counter is: {count}</h1>
        <button onClick={() => setCount(count + 1)} style={{backgroundColor:"blue"}}>Increment</button>
      </div>
      <ColorFul />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);


