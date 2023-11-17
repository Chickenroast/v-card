import React, { useState } from "react";
import "../App.css";

interface InfoProps {
  Bio: string;
  parabio: string;
}

const InfoProps: React.FC<InfoProps> = ({ Bio, parabio }) => {
  return (
    <div className="cardback">
      <div className="box">
        {/* Face arrière */}
        <h1 className="h1">{Bio}</h1>
        <p className="p2">{parabio}</p>
      </div>
    </div>
  );
};

export default InfoProps;
