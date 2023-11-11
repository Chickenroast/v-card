import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

interface CardProps {
  title: string;
  statut: string;
  school: string;
}

const VCard: React.FC<CardProps> = ({ title, school, statut }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <CardContainer onClick={handleCardClick} isFlipped={isFlipped}>
      <FrontFace>
        <h1 className="h1">{title}</h1>
        <p className="p">{statut}</p>
        <p className="p">{school}</p>
        <WavyShape />
      </FrontFace>
      <BackFace>
        {/* Content for the back face */}
        <p>This is the back face</p>
      </BackFace>
    </CardContainer>
  );
};

// Define the animation
const cardFlipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(180deg);
  }
`;

// Style the component with the animation
const CardContainer = styled.div<{ isFlipped: boolean }>`
  position: relative;
  width: 200px;
  height: 300px;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  cursor: pointer;
  animation: ${cardFlipAnimation} 2s infinite; // Add this line to use the animation
`;

const Face = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const FrontFace = styled(Face)`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

const BackFace = styled(Face)`
  background-color: lightblue; /* Change the color for the back face */
  padding: 20px;
  border-radius: 10px;
  transform: rotateY(180deg);
`;

// Create a wave-like pattern for the liquid effect
const WavyShape = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(to right, #ffffff 25%, #f0f0f0 50%, #ffffff 75%);
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    background: linear-gradient(
      to right,
      #ffffff 25%,
      #f0f0f0 50%,
      #ffffff 75%
    );
    transform: skewX(-20deg);
    animation: waveAnimation 2s infinite linear;
  }
  @keyframes waveAnimation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export default VCard;
