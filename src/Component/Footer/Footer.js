import React from 'react';
import './Footer.css';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white social_icons">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              target="_blank"
              className="btn btn-outline icon"
              href="https://www.facebook.com/profile.php?id=100016033718124"
              role="button"
            >
              {/* <i className="fab fa-facebook-f"></i> */}
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            {/* <!-- Twitter --> */}
            <a
              target="_blank"
              className="btn btn-outline icon"
              href="https://twitter.com/isyoboi_harshit?s=08"
              role="button"
            >
              {/* <i className="fab fa-twitter"></i> */}
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            {/* <!-- Instagram --> */}
            <a
              target="_blank"
              className="btn btn-outline icon"
              href="https://instagram.com/itz_harshit_gupta?igshid=1xbtbq3xzlniu"
              role="button"
            >
              {/* <i className="fab fa-instagram"></i> */}
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            {/* <!-- Linkedin --> */}
            <a
              target="_blank"
              className="btn btn-outline icon"
              href="https://www.linkedin.com/in/harshit-kumar-gupta-a55294186"
              role="button"
            >
              {/* <i className="fab fa-linkedin-in"></i> */}
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            {/* <!-- Github --> */}
            <a
              target="_blank"
              className="btn btn-outline icon"
              href="https://github.com/HarshitGupta865"
              role="button"
            >
              {/* <i className="fab fa-github"></i> */}
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3 copyright">
          Made with ❤️ by —{' '}
          <a target="_blank" href="https://github.com/HarshitGupta865">
            Harshit Kumar Gupta
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
