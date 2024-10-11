import myImage from '../utils/images/m2.jpg';
import '../App.css';
import './About.css';

export default function About() {
    return (
      <div className="container text-center">
        <h1 className="pageHeader">About Me</h1>
        <div className="row">
            <div id="photoContainer" className="col-4">
              <div id="photoDiv">
                <img id="myPhoto" src={myImage}/>
              </div>

              <p id="quote">
                ... Growth and comfort do not coexist."...
              </p>
              <p id="quoteAuthor">
               
              </p>
            </div>
            <div className="col-1"></div>
            <div id="bioContainer" className="col-7">
              <p className="bio">
                I am Shobha Ganesh living in Phoenix since 2022
                Keen on learning new skills 
              </p>
              <p className="bio">
                I am currently working with TATA CONSULTANCY SERVICES having an experience of 17+ years as a Site Reliable Engineer.
              </p>
              <p className="bio">
                <ul id="bioEducation">
                  <li>
                    Completed Web Coding Bootcamp, Arizona University - 2024
                  </li>
                  <li>
                  Bachelor of Engineering from MVJ College of Engineering - 2006
                  </li>
                  
                </ul>         
              </p>
            </div>

        </div>
        
      </div>
    );
  }