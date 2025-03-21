import React from "react";
import "../styles/footer.css";
import { LampCharge } from "iconsax-react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MyFooter() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="marketplace">
          <div className="footer-logo">
            <LampCharge size="25" color="#26b5c5" />
            <h5>QUIZZLER</h5>
          </div>
          <p>Designed and Developed By David Okonkwo</p>
          <p>Socials</p>
          <div className="socials">
            <a
              href="https://github.com/dkokonkwo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="media" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-okonkwo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="media" />
            </a>
            <a
              href="https://dkokonkwo.github.io/dk-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBriefcase} className="media" />
            </a>
          </div>
        </div>
        <div className="explore">
          <h5>Explore</h5>
          <a
            href="https://dkokonkwo.github.io/dk-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Portfolio
          </a>
          <a
            href="https://opentdb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Trivia
          </a>
        </div>
        <div className="sign-up">
          <h5>Join Our Weekly Digest</h5>
          <p>Get exclusive promotions & updates straight to your inbox</p>
          <div className="subscribe"></div>
        </div>
      </div>
      <div className="copyright">
        <p>Ⓒ Quizzler Game. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default MyFooter;
