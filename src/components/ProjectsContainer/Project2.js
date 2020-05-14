import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://imgur.com/9PXk4MX.png',
    thumbnail: 'https://imgur.com/9PXk4MX.png'
  }, 
  {
    original: 'https://imgur.com/DsqunKE.png',
    thumbnail: 'https://imgur.com/DsqunKE.png'
  }, 
  {
    original: 'https://imgur.com/XRSn11Q.png',
    thumbnail: 'https://imgur.com/XRSn11Q.png'
  }, 
]

const Project2 = () => {
  return <section className="section project main-content">
    <div className="container">
      <h1 className="title">Drinkalicious</h1>
      <h2 className="subtitle">Pair Project | 2 Days</h2>
      <div className="project-content">
        <div className="project-desc">
          We were tasked with creating a Reactjs front-end for a public API of our choice. <br/>
          My partner and I decided on a cocktail API which serves a list of cocktails, their ingredients, and the recipe to create them. <br/>
        </div>
        <div className="project-screenshots">
          <ImageGallery items={images} className="project-screenshots" showPlayButton={false} showFullscreenButton={false} />
        </div>
      </div>
    </div>
  </section>
}

export default Project2;