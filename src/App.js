import React, { Component } from "react";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card/";
//styles
import Grid from "@material-ui/core/Grid";
import M from "materialize-css";
import "./App.css";
//json
import projects from "./Data/projects.json";
import comingsoon from "./Data/comingsoon.json";
import frameworks from "./Data/frameworks.json";

class App extends Component {
  state = {
    projects,
    comingsoon,
    frameworks,
  };

  componentDidMount = () => {
    var elems1 = document.querySelectorAll(".parallax");
    M.Parallax.init(elems1);

    var elems = document.querySelectorAll(".carousel");
      M.Carousel.init(elems, {
        indicators: true,
        duration: 300,
        autoPlay: true,
      });
   
  
  };
    
      

  render() {
    return (
      <div>
        <Landing />
        <Navbar />
        <div className="section black" id="aboutMe">
          <div className="row">
            <div className="col s12 m4 center">
              <img
                src="https://i.postimg.cc/MKW6gC5z/53-A1247-A-3555-49-BA-981-C-15306-A54913-B.jpg"
                alt=""
                className="circle responsive-img z-depth-5"
                data-aos="fade-up-right"
              />
            </div>
            <div className="col s12 m8 center-align">
              <h3 className="grey-text text-darken-3 lighten-3">
                Full Stack MERN Developer <br />| Coding Bootcamp Instructor
              </h3>
              <p className="white-text">
                Currently an Instructor for a coding bootcamp sharing my passion
                for coding and molding the minds of Junior MERN Stack
                Developers. When I leave the classroom I work on my own
                projects. Today’s trends go mobile first, so a cohesive and
                responsive design is always on my mind.I am known for
                collaborating, working hard and getting things done.Every
                project is unique and I will craft your App for the target
                audience. Originally raised in Miami, Growing up surrounded by
                the pop art culture.I have developed a deep passion for style,
                however, I construct my art via code.To connect my passion of
                creating a more beautiful world via design I have completed the
                Full - Stack development course via the University of Arizona.I
                am confidently able to create and coordinate dynamic user
                experiences via front end and back languages and frameworks
                like, HTML, CSS, JavaScript, Node, and React.js.
                <br />
                <br />
                I’m actively pursuing a UX Design Certificate through Grow with
                Google Courses.
              </p>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img
              src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="parallax-1"
            />
          </div>
        </div>
        <div className="section black">
          <div className="row">
            <div className="col s12">
              <h1 className="carouselTitle center tools">
                The tools of the Trade!
              </h1>
              <div className="carousel">
                {this.state.frameworks.map((framework) => (
                  <a key={framework.id} className="carousel-item">
                    <img
                      alt="images on carousel"
                      id={framework.id}
                      key={framework.id}
                      src={framework.image}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div id="portfolio" className="col s12">
              <h2 className="portfolio-header port"> Portfolio </h2>
              <p className="portfolio-tag">
                Come view my personal work and project collaborations!
              </p>
            </div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={10}
              style={{ paddingLeft: "25px", padding: "35px" }}
            >
              {this.state.projects.map((project) => (
                <Grid key={project.id} item sm={12} md={6} lg={4} xl={4}>
                  <Card
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    content={project.content}
                    link={project.link}
                    gitHubLink={project.gitHubLink}
                  />
                </Grid>
              ))}
            </Grid>
            <div className="col s12">
              <h2 className="portfolio-header soon"> Coming Soon! </h2>
              <p className="portfolio-tag">
                Projects that are in the development phase.
              </p>
            </div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={10}
              style={{ paddingLeft: "25px", padding: "35px" }}
            >
              {this.state.comingsoon.map((project) => (
                <Grid key={project.id} item sm={12} md={6} lg={4} xl={4}>
                  <Card
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    content={project.content}
                    gitHubLink={project.gitHubLink}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>

        <div className="parallax-container">
          <div className="parallax 3">
            <img
              src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbm5lY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="parallax-3"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
