import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://imgur.com/lnrCdp2.png',
    thumbnail: 'https://imgur.com/lnrCdp2.png'
  },
  {
    original: 'https://imgur.com/qxXQzGs.png',
    thumbnail: 'https://imgur.com/qxXQzGs.png'
  }
]

const Project1 = () => {
  return <section className="section project main-content">
    <div className="container">
      <h1 className="title">Pac Man</h1>
      <h2 className="subtitle">Solo Project | 1 Week</h2>
      <div className="project-content">
        <p className="project-desc">
          For this project, I created an implementation of Pac Man which uses an A-Star search algorithm for the ghost pathing logic. <br/>
          This was made using HTML5/CSS3 and JavaScript. I used JavaScript to manipulate the DOM.
        </p>
        <div className="project-screenshots">
          <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
        </div>
      </div>
    </div>
  </section>
}

export default Project1;