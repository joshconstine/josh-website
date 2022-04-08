import "./App.css";
import { Box } from "@mui/material";

function Projects() {
  return (
    <Box className="projectContainer">
      {/* <img src="shouldacoulda.png" className="thumbnail" /> */}
      <Box className="infoContainer">
        <h3>Shoulda Coulda</h3>
        <h5>Group Project</h5>
        <p></p>
        <a href="https://shouldacoulda.herokuapp.com/">check it out</a>
      </Box>
    </Box>
  );
}

export default Projects;
