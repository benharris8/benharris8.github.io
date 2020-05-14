import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <section className="section contact">
    <hr />
    <div className="container">
      <div className="skill-container">
        <a href="https://www.linkedin.com/in/benharris8"><FontAwesomeIcon className="skill" icon={faLinkedin} size="2x" /></a>
        <a href="https://www.github.com/benharris8"><FontAwesomeIcon className="skill" icon={faGithub} size="2x" /></a>
      </div>

    </div>
  </section>
)

export default Contact;