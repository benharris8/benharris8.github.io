import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <section className="section contact">
    <hr />
    <div className="container">
      <div className="skill-container">
        <FontAwesomeIcon className="skill" icon={faEnvelope} size="2x" />
        <FontAwesomeIcon className="skill" icon={faLinkedin} size="2x" />
        <FontAwesomeIcon className="skill" icon={faGithub} size="2x" />
      </div>

    </div>
  </section>
)

export default Contact;