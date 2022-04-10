import "./App.css";
import { Box } from "@mui/material";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <Box className="Appbody">
        <h2 id="about">Joshua Constine</h2>
        <Box>
          <img src="faceShot.jpg" alt="img" className="img" />
        </Box>

        <About />

        <Experience />
        <a id="education" className="sections">
          Education
        </a>
        <Education />
        <a id="projects" className="sections">
          Projects
        </a>
        <Projects />
        <a id="skills" className="sections">
          Skills
        </a>
        <Skills />
        <a id="contact" className="sections">
          Contact
        </a>
        <Contact />
      </Box>
    </div>
  );
}

export default App;
