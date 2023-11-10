import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const CardProps: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
export default CardProps;
