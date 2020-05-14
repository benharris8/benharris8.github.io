import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faGithub, faPython, faNodeJs, faNpm, faHtml5, faCss3, faJava, faAndroid, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return <section className="section skills">
    <hr />
    <div className="container">
      <h1 className="title"> Skills</h1>
      <div className="skill-container">
        <FontAwesomeIcon className="skill" icon={faJsSquare} size="4x" />
        <FontAwesomeIcon className="skill" icon={faGithub} size="4x" />
        <FontAwesomeIcon className="skill" icon={faPython} size="4x" />
        <FontAwesomeIcon className="skill" icon={faNodeJs} size="4x" />
        <FontAwesomeIcon className="skill" icon={faNpm} size="4x" />
        <FontAwesomeIcon className="skill" icon={faHtml5} size="4x" />
        <FontAwesomeIcon className="skill" icon={faCss3} size="4x" />
        <FontAwesomeIcon className="skill" icon={faJava} size="4x" />
        <FontAwesomeIcon className="skill" icon={faAndroid} size="4x" />
        <FontAwesomeIcon className="skill" icon={faReact} size="4x" />
        <FontAwesomeIcon className="skill" icon={faDatabase} size="4x" />
      </div>
    </div>
  </section>
}

export default Skills;