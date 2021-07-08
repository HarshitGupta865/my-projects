import React from 'react';
import '../../index.css';
import './Body.css';
import project1 from '../../Images/project1.webp';
import project2 from '../../Images/project2.webp';
import project3 from '../../Images/project3.webp';
import project4 from '../../Images/project4.webp';
import project5 from '../../Images/project5.webp';
import project6 from '../../Images/project6.webp';
import project7 from '../../Images/project7.webp';
import project8 from '../../Images/project8.webp';
import project9 from '../../Images/project9.webp';
import project10 from '../../Images/project10.png';
import Github from '../../Images/github.svg';

const Body = () => {
  return (
    <div className="body_container">
      <div className="main_body">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <p className="body_upper_para">
              Projects last made are shown first.
              <br />
              Projects showcased below also reflects my web development journey
              from a complete begineer to where I stand today.
            </p>

            {/* Row project container is the main className that contains repeated sections */}

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project10} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Insurance Point Office</h1>
                <p>
                  Collaborated for the development & devployment of the website
                  for Insurance Point Point as one of my freelancing projects.
                </p>
                <div className="project_link">
                  <a
                    href="https://insurancepointoffice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project9} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Dictionary</h1>
                <p>
                  Search for the meaning of any word using this Dictionary
                  created with React - A frontend framework. Data about the word
                  searched is taken from a free-dictinary API whereas images for
                  the searched word is extracted from another API. Hence two
                  API's are used to make this website.
                </p>
                <div className="project_link">
                  <a
                    href="https://harshitgupta865.github.io/dictionary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/dictionary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project8} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Weather App</h1>
                <p>
                  A Real-time and fully responsive weather app created using
                  HTML, CSS and Javascript in the front-end and node.js
                  framework express.js in the backend development of the
                  website.
                </p>
                <div className="project_link">
                  <a
                    href="https://weather-app-by-harshit.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/my-weather-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project7} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Github Profile Viewer</h1>
                <p>
                  Enter your github username in the search bar to see your
                  github account in an asthetic view.
                  <br />
                  Made using pure HTML, CSS and Javascript.
                </p>
                <div className="project_link">
                  <a
                    href="https://harshitgupta865.github.io/Github-Profiles/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/Github-Profiles"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project6} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Music Player</h1>
                <p>
                  A web page that consists of 10 random songs.
                  <br />
                  Tried keeping the design of the music player simple yet
                  beautiful.
                </p>
                <div className="project_link">
                  <a
                    href="https://harshitgupta865.github.io/Music-Player/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/Music-Player"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project5} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Notes Keeper</h1>
                <p>
                  A notes keeper app to keep notes of anything as & when
                  required.
                  <br />
                  Notes created does not get deleted when the page gets
                  refreshed.
                </p>
                <div className="project_link">
                  <a
                    href="https://harshitgupta865.github.io/Notes-Keeper/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/Notes-Keeper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project4} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Bubble Animation</h1>
                <p>
                  A web page created with amazing bubble animation effects. Made
                  using pure HTML and CSS only.
                </p>
                <div className="project_link">
                  <a
                    href="https://harshitgupta865.github.io/bubble-animation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/bubble-animation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project3} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Mera Bharat</h1>
                <p>
                  Mera Bharat is a fictional tourism landing page I created with
                  the purpose of learning CSS properties and animations.
                </p>
                <div className="project_link">
                  <a
                    href="https://harshitgupta865.github.io/MERA-BHARAT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/MERA-BHARAT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project2} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>Tindog</h1>
                <p>
                  Tinder for dogs = Tindog.
                  <br />
                  Made this landing page that goes by the name Tindog.
                </p>
                <div className="project_link">
                  <a
                    href="https://harshitgupta865.github.io/Tindog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/Tindog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>

            <div className="row project_container last_container">
              <div className="col-md-5 col-12 left_side">
                <img src={project1} alt="" />
              </div>
              <div className="col-md-5 col-12 right_side">
                <h1>My CV</h1>
                <p>First web page that I ever made using HTML only.</p>
                <div className="project_link">
                  <a
                    href="https://harshitgupta865.github.io/CV/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site_link"
                  >
                    Visit Site <span className="arrow">&rarr;</span>
                  </a>
                  <a
                    href="https://github.com/HarshitGupta865/CV"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={Github} alt="Github" className="github_link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

{
  /* <div className="project_link">
<a
  href="#"
  target="_blank"
  rel="noopener noreferrer"
  className="site_link"
>
  Visit Site <span className="arrow">&rarr;</span>
</a>
<a href="#" target="_blank" rel="noopener noreferrer">
  <img src={Github} alt="Github" className="github_link" />
</a>
</div> */
}

{
  /* <p className="body_upper_para">
          Projects last made are shown first.
          <br />
          Projects showcased below also reflects my web development journey from
          a complete begineer to where I stand today.
        </p> */
}
