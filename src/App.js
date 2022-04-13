import "./App.css";
import { Box, Container } from "@mui/material";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <div className="theme">
        <Container
          className="App"
          sx={{ paddingTop: { xs: 18, sm: 18, md: 5 } }}
        >
          <Navbar />

          <Box className="Appbody">
            <Box>
              <img src="faceShot.jpg" alt="img" className="profile" />
            </Box>

            <About />
          </Box>
        </Container>
      </div>
      <div>
        <Container>
          <Box className="Appbody">
            <Experience />

            <Education />

            <Projects />
          </Box>
        </Container>
      </div>
      <div className="theme">
        <Skills />
      </div>
    </>
  );
}

export default App;
