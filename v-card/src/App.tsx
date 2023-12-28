import React, { useState } from "react";
import "./App.css";
import CardProps from "../src/components/vcard.tsx";
import InfoProps from "./components/Info.tsx";
import Picture from "./components/Picture.tsx";
import Socialbar from "./components/socialbar.tsx";

function App() {
  const [showCard, setShowCard] = useState(true);

  const handleSwapClick = () => {
    setShowCard(!showCard);
  };

  return (
    <>
      <div className="elements">
        <div className="picturesocial">
          <div>
            <Picture />
          </div>

          <div>
            <Socialbar />
          </div>
        </div>

        <div>
          <div onClick={handleSwapClick}>
            {showCard ? (
              <InfoProps
                Bio="Hello world!"
                parabio="Do you too, like enjoy solving puzzles? Teamwork? 
                Are you looking for a colleague who is not sensitive to stress 
                and loves facing challenges? Then flip this card and get in touch with me!"
              />
            ) : (
              <CardProps
                title="Julia Michel T."
                statut="Student junior web developer"
                school="at Becode"
                phonenumber="+32 483 45 39 66"
                email="juliamicheltex@gmail.com"
              />
            )}
          </div>
        </div>
      </div>

      {/* <div>
        <ImageGallery />
      </div> */}
    </>
  );
}

export default App;
