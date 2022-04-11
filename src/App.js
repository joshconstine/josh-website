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
          <img src="faceShot.jpg" alt="img" className="profile" />
        </Box>

        <About />

        <Experience />

        <Education />

        <Projects />

        <Skills />
      </Box>
    </div>
  );
}

export default App;
