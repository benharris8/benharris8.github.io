import React from 'react';

const Experience = () => {
  return <section className="section experience">
    <hr />
    <div className="container">
      <h1 className="title">
        Experience
      </h1>
      <div className="experiences main-content">
        <div className="experience-entry">
          <h2 className="subtitle">
            General Assembly
          </h2>
          <div className="experience-content">
            <p>
              At GA, I took the Software Engineering Immersive course. <br />
            This was a 12 week intensive programming course during which we made four projects with the skills we gained. <br />
            </p>
            <p>
              Whilst at General Assembly, I learned many modern web development technologies such as JavaScript, React, Express.js and Django which I used to create the four projects listed above.<br /><br />
            </p>
          </div>
        </div>
        <div className="experience-entry">
          <h2 className="subtitle">
            University
          </h2>
          <div className="experience-content">
            <p>
              While at University I studied many interesting topics surrounding Computer Science including relational databases, compiler theory and software engineering principals. <br />
            </p>
            <p>
              The technologies I learned during this time included Java, MySQL, Python, and Haskell. <br />
            </p>
            <p>
              During my final year I created an Android flashcard application which involved learning Android development from the ground up. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Experience;