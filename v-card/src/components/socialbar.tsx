import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

import {
  faGithub,
  faLinkedin,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

function Socialbar() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleMouseEnter = (iconName: string) => {
    setHoveredIcon(iconName);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const getIconStyle = (iconName: string): React.CSSProperties => ({
    color: hoveredIcon === iconName ? "#82040e" : "red",
    transition: "color 0.3s ease",
  });

  return (
    <div className="socialbar">
      <a
        href="https://github.com/Chickenroast"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleMouseEnter("github")}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faGithub} style={getIconStyle("github")} />
      </a>
      <a
        href="https://www.linkedin.com/in/julia-michel-teixeira-067a64291/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleMouseEnter("linkedin")}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faLinkedin} style={getIconStyle("linkedin")} />
      </a>
      <a
        href="https://twitter.com/PouletduBrazil"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleMouseEnter("twitter")}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faTwitter} style={getIconStyle("twitter")} />
      </a>
      <a
        href="https://codepen.io/Julia-Michel-Teixeira"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => handleMouseEnter("codepen")}
        onMouseLeave={handleMouseLeave}
      >
        <FontAwesomeIcon icon={faCodepen} style={getIconStyle("codepen")} />
      </a>
    </div>
  );
}

export default Socialbar;
