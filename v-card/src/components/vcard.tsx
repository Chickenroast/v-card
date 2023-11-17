import React, { useState } from "react";
import "../App.css";
import { motion, useAnimation } from "framer-motion";

interface CardProps {
  title: string;
  statut: string;
  school: string;
  Bio: string;
  parabio: string;
}

/* FLIPPED ------------------------------------------------*/
const CardProps: React.FC<CardProps> = ({
  title,
  school,
  statut,
  Bio,
  parabio,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleCardClick = () => {
    controls.start({
      rotateY: isFlipped ? 0 : 180,
      transition: { duration: 0.4 },
    });
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="cardback">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className={`card-wrapper ${isFlipped ? "flipped" : ""}`}
        onClick={handleCardClick}
      >
        <motion.div
          className="box"
          animate={controls}
          initial={{ rotateY: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Face avant */}
          <div className={`front ${isFlipped ? "hidden" : ""}`}>
            <h1 className="h1">{title}</h1>
            <p className="p">{statut}</p>
            <p className="p">{school}</p>
          </div>

          {/* Face arrière */}
          <div className={`back ${isFlipped ? "" : "hidden"}`}>
            <h1 className="h1">{Bio}</h1>
            <p className="p2">{parabio}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardProps;
