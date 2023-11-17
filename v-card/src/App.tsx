// import React from "react";
import "./App.css";
import CardProps from "../src/components/vcard.tsx";
import InfoProps from "./components/Info.tsx";

function App() {
  return (
    <>
      <div>
        <div>
          <CardProps
            title="Julia Michel T."
            statut="Student junior web developer"
            school="at Becode"
          />
        </div>
      </div>

      <div>
        <div>
          <InfoProps
            Bio="Hello world!"
            parabio="Do you too,like enjoy solving puzzles? Teamwork? 
          Are you looking for a colleague who is not sensitive to stress 
          and loves facing challenges? Then flip this card and get in touch with me!"
          />
        </div>
      </div>
    </>
  );
}

export default App;
