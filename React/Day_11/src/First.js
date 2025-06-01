import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Second from "./Second";
import GlobalContext from "./Global";
import { useContext } from "react";
import Fifth from "./Fifth";
function App() {
    const [count, setCount] = useState(10);

    return (
        <>
        <Fifth/>
        <GlobalContext.Provider value={{count,setCount}}> {/* here pass obj like so we write count, setCount */}
            <h1>Hello coders: {count}</h1>
            <Second/>
        </GlobalContext.Provider>

        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
