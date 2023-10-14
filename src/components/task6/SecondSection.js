import React from 'react';
import imageOfMe from './assets/hari photo 2020.jpg'; // Import your image
import './style1.css';
import gamerImage from './assets/391133.jpg';
import codeProgrammerImage from './assets/code-programmer.gif';


function SecondSection() {
  return (
    <div>
    <div className="second">
      <div className="container">
        <div className="profile">
          <img src={imageOfMe} className="img-fluid profile-img" alt="image of me" />
          <h2 className="intro1">Hello.</h2>
          <p className="intro">I am a Web Developer. I love to code &#128483; </p>
        </div>
        <hr />
        <div className="skills">
          <h2 className="intro2">My Skills</h2>
          <div className="parent">
            <div className="typing">
              <img src={codeProgrammerImage} className="img-fluid new" alt="jim-carrey" />
            </div>
            <div className="coding">
              <h3>Coding</h3>
              <p>I started coding in 12th grade and pursued a career in it.</p>
            </div>
            <div className="gamer">
              <img src={gamerImage} className="img-fluid new_game" alt="cod 3" />
            </div>
            <div className="gaming">
              <h3>Avid Gamer</h3>
              <p>I'm good at Black Ops 3, hitting 360 shots. I'm a beast.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="me">
          <h2 className="intro4">Contact me</h2>
          <h3 className="intro3">If you love COD games like me</h3>
          <p className="intro5">
            If you want to play 1v1 or snipers only, click the button below for a challenge.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a className="btn btn-danger btn-lg px-4 me-sm-3" type="button" href="mailto:hariram6674@gmail.com">Ready ?</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SecondSection;
