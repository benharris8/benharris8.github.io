import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faArrowLeft, faArrowRight);

import Project1 from './ProjectsContainer/Project1';
import Project2 from './ProjectsContainer/Project2';
import Project3 from './ProjectsContainer/Project3';
import Project4 from './ProjectsContainer/Project4';


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0
    }
  }

  handleLeft(event) {
    event.preventDefault();
    const { current } = this.state;
    if (current === 0) return this.setState({ current: 3 });
    this.setState({ current: current - 1 });
  }

  handleRight(event) {
    event.preventDefault();
    const { current } = this.state;
    if (current === 3) return this.setState({ current: 0 });
    this.setState({ current: current + 1 });
  }

  render() {
    const { current } = this.state;

    return <div className="projects">
      <FontAwesomeIcon
        onClick={(event) => this.handleLeft(event)}
        icon={faArrowLeft}
        size="2x"
        className="arrow left-arrow"
      />
      {current === 0 && <Project1 />}
      {current === 1 && <Project2 />}
      {current === 2 && <Project3 />}
      {current === 3 && <Project4 />}
      <FontAwesomeIcon
        onClick={(event) => this.handleRight(event)}
        icon={faArrowRight}
        size="2x"
        className="arrow right-arrow"
      />
    </div>
  }
}

export default Projects;