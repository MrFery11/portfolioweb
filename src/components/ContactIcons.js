import React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBloggerB,
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function ContactIcons() {
  return (
    <Box className="contactIcons">
      <div className="contactIcon">
        <a href="mailto:fernando.aguilar.acosta@hotmail.com" target="_blank">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="contactIcon">
        <a href="https://github.com/MrFery11" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="contactIcon">
        <a href="https://www.linkedin.com/in/fernandoaguilaracosta/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="contactIcon">
        <a href="https://www.instagram.com/fernandoag_22/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </Box>
  );
}

export default ContactIcons;
