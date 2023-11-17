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
  const iconStyle: React.CSSProperties = {
    color: "red",
    transition: "color 0.3s ease",
  };
  return (
    <div className="socialbar">
      <a
        href="https://github.com/Chickenroast"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} style={iconStyle} />
      </a>
      <a
        href="https://www.linkedin.com/in/julia-michel-teixeira-067a64291/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
      </a>
      <a
        href="https://twitter.com/PouletduBrazil"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
      </a>
      <a
        href="https://codepen.io/Julia-Michel-Teixeira"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faCodepen} style={iconStyle} />
      </a>
    </div>
  );
}

export default Socialbar;
