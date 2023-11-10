import React from "react";
import "./App.css";
import CardProps from "./components/Vcard.tsx";

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <CardProps
        title="Example Card"
        content="This is the content of the card."
      />
    </div>
  );
}

export default App;
