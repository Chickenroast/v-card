import React, { useState } from "react";
import "../App.css"; // Import your CSS file
import { motion, useAnimation } from "framer-motion";

interface CardProps {
  title: string;
  statut: string;
  school: string;
}

const CardProps: React.FC<CardProps> = ({ title, school, statut }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleCardClick = () => {
    controls.start({ rotateY: isFlipped ? 0 : 180 });
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`card-wrapper ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <motion.div
        className="box"
        animate={controls}
        initial={{ rotateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="h1">{title}</h1>
        <p className="p">{statut}</p>
        <p className="p">{school}</p>
      </motion.div>
    </motion.div>
  );
};

export default CardProps;
