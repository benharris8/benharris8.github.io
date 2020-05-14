import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://imgur.com/UmllGjv.png',
    thumbnail: 'https://imgur.com/UmllGjv.png'
  }, 
  {
    original: 'https://imgur.com/TdLyTCZ.png',
    thumbnail: 'https://imgur.com/TdLyTCZ.png'
  }, 
  {
    original: 'https://imgur.com/Jq85THH.png',
    thumbnail: 'https://imgur.com/Jq85THH.png'
  }, 
]

const Project3 = () => {
  return <section className="section project main-content">
    <div className="container">
      <h1 className="title">Food for Thought</h1>
      <h2 className="subtitle">Group Project | 2 Weeks</h2>
      <div className="project-content">
        <div className="project-desc">
          Our group decided to create an application which allows users to browse restaurants available in London. <br />
          For this project we used the MERN stack and it was the most comprehensive use of our skillset so far. <br />
          I implemented GridFS for our MongoDB storage system which allowed us to store files greater than the MongoDB filesize limit.
        </div>
        <div className="project-screenshots">
          <ImageGallery items={images} className="project-screenshots" showPlayButton={false} showFullscreenButton={false} />
        </div>
      </div>
    </div>
  </section>
}

export default Project3;