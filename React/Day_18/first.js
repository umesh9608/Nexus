import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Add from "./Add";

function App() {
  const [languange, setLanguage] = useState(["Ts", "Js", "Java"]);

  function handleClick() {
    setLanguage(["C++", ...languange]);
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  };

  const buttonStyle = {
    display: "block",
    margin: "30px auto",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <>
      <div style={containerStyle}>
        {languange.map((value) => (
          <Add key={value} value={value} />
        ))}
      </div>

      <button onClick={handleClick} style={buttonStyle}>
        Add Language
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
