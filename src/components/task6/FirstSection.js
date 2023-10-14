import React from 'react';
import cloudImage from './assets/cloud.png';
import valleyImage from './assets/Valley_with_Pathway_PNG_Clipart.png';
import './style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FirstSection() {
  return (
    <div className="first gradient-backround">
      <div>
        <img src={cloudImage} className="img-fluid top1" alt="cloud" />
        <h1 className="damn fw-bold">I'm Hariram.</h1>
        <h2 className="more">a <span className="dec">pro</span>grammer and a <span className="dec">pro</span> gamer.</h2>
        <img src={cloudImage} className="img-fluid bottom1" alt="cloud" />
      </div>
      <div>
        <img src={valleyImage} className=" img-fluid rounded-lg-5 overflow-x-hidden" height="430px" width="100%" alt="valley" />
      </div>
    </div>
  );
}

export default FirstSection;
