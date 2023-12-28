import React, { useState } from "react";
import "../App.css";

interface CardProps {
  title: string;
  statut: string;
  school: string;
  phonenumber: string;
  email: string;
}

const CardProps: React.FC<CardProps> = ({
  title,
  school,
  statut,
  phonenumber,
  email,
}) => {
  return (
    <div className="cardback">
      <div className="box">
        {/* Face avant */}
        <h1 className="h1">{title}</h1>
        <p className="p">{statut}</p>
        <p className="p">{school}</p>
        <div className="contact">
          <p className="p3">Phone: {phonenumber}</p>
          <p className="p3">Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProps;
