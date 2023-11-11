import React from "react";

interface CardProps {
  title: string;
  statut: string;
  school: string;
}

const CardProps: React.FC<CardProps> = ({ title, school, statut }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <h1 className="h1">{title}</h1>
        <p className="p">{statut}</p>
        <p className="p">{school}</p>
      </div>
    </div>
  );
};
export default CardProps;
