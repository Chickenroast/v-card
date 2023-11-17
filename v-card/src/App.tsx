// import React from "react";
import "./App.css";
import CardProps from "../src/components/vcard";

function App() {
  return (
    <div>
      <div>
        <div>
          <CardProps
            title="Julia Michel T."
            statut="Student junior web developer"
            school="at Becode"
            Bio="Hello world!"
            parabio="Do you too,like enjoy solving puzzles? Teamwork? Are you looking for a colleague who is not sensitive to stress and loves facing challenges? Then flip this card and get in touch with me!" // Add parabio prop
          />
        </div>
      </div>
    </div>
  );
}

export default App;
