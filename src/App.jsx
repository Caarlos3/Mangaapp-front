import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "40px",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search 🔎"
            style={{
              width: "300px",
              height: "40px",
              borderRadius: "20px",
              border: "none",
              padding: "0 20px",
              fontSize: "16px",
              textAlign: "center",
              outline: "none"
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
