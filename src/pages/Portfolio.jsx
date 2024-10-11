import pr01img from '../utils/images/pr01.jpg';
import pr02img from '../utils/images/pr02.jpg';
import pr03img from '../utils/images/pr03.jpg';
import pr04img from '../utils/images/pr04.jpg';
import pr05img from '../utils/images/pr05.jpg';
import pr06img from '../utils/images/pr06.jpg';
import '../App.css';
import './Portfolio.css';
// import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="container text-center">
      <h1 className="pageHeader">My Portfolio</h1>
      <div className="row customRow">
        <div className="col-5 image-container">
          <a href="https://github.com/sgforcert/Module10SVGLogoMaker" target="_blank" rel="noopener noreferrer">
            <img src={pr01img} className="projectImg" />
            <div className="overlay">Node.js command-line App</div>
            <h4 className="projectLink">SVG-Logo-Maker GitHub repo</h4>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5 image-container">
          <a href="https://github.com/sgforcert/Module9Readme" target="_blank" rel="noopener noreferrer">
            <img src={pr02img} className="projectImg" />
            <div className="overlay">Node.js command-line App</div>
            <h4 className="projectLink">README-Generator GitHub repo</h4>
          </a>
        </div>
      </div>
      <div className="row customRow">
        <div className="col-5">

        </div>
        <div className="col-2"></div>
        <div className="col-5">

        </div>
      </div>

      <div className="row customRow">
        <div className="col-5 image-container">
          <a href="https://github.com/sgforcert/Employee-Tracker-App-for-Module12" target="_blank" rel="noopener noreferrer">
            <img src={pr04img} className="projectImg" />
            <div className="overlay">Node.js, PostgreSQL command-line App</div>
            <h4 className="projectLink">Employee-Tracker GitHub repo</h4>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5 image-container">
          <a href="https://github.com/sgforcert/-Tech-Blogfor-Assignment" target="_blank" rel="noopener noreferrer">
            <img src={pr03img} className="projectImg" />
            <div className="overlay">blog WebApp based on MVC</div>
            <h4 className="projectLink">CMS-style blog site GitHub repo</h4>
          </a>
        </div>
      </div>
      <div className="row customRow">
        <div className="col-5">

        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <a href="https://github.com/sgforcert/-Tech-Blogfor-Assignment" target="_blank" rel="noopener noreferrer">
            <h4 className="projectLink web">check Tech Blog WEB</h4>
          </a>
        </div>
      </div>

      <div className="row customRow">
        <div className="col-5 image-container">
          <a href="https://github.com/sgforcert/Quality-Data-Storage" target="_blank" rel="noopener noreferrer">
            <img src={pr05img} className="projectImg" />
            <div className="overlay">JavaScript, Local Storage, 3rd party API frontEnd WebApp</div>
            <h4 className="projectLink">Easy Gardening GitHub repo</h4>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5 image-container">
          <a href="https://github.com/sgforcert/Social-Network-APIfor-Module18" target="_blank" rel="noopener noreferrer">
            <img src={pr06img} className="projectImg" />
            <div className="overlay">backEnd MongoDB App</div>
            <h4 className="projectLink">Social-Network-API GitHub repo</h4>
          </a>
        </div>
      </div>
      <div className="row customRow">
        <div className="col-5">
          <a href="https://github.com/sgforcert/Project-1" target="_blank" rel="noopener noreferrer">
            <h4 className="projectLink web">check Easy Gardening WEB</h4>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5">

        </div>
      </div>
    </div>
  );
}