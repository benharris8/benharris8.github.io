import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://imgur.com/CqrQeJj.png',
    thumbnail: 'https://imgur.com/CqrQeJj.png'
  }, 
  {
    original: 'https://imgur.com/SsB6vbs.png',
    thumbnail: 'https://imgur.com/SsB6vbs.png'
  }, 
  {
    original: 'https://imgur.com/RlPT9My.png',
    thumbnail: 'https://imgur.com/RlPT9My.png'
  }, 
]

const Project4 = () => {
  return <section className="section project main-content">
    <div className="container">
      <h1 className="title">Hello Code</h1>
      <h2 className="subtitle">Group Project | 1 Week</h2>
      <div className="project-content">
        <div className="project-desc">
          For the last project, we created an application with a Django back-end and a React.js front-end. <br />
          The application allows for software developers to connect with other developers to ask for assistance with programming issues. <br/>
          I implemented Django Channels (websockets in Django) for our chat feature. <br/>
        </div>
        <div className="project-screenshots">
          <ImageGallery items={images} className="project-screenshots" showPlayButton={false} showFullscreenButton={false} />
        </div>
      </div>
    </div>
  </section>
}

export default Project4;