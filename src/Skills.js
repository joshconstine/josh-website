import "./App.css";
import { Box } from "@mui/material";

function Skills() {
  return (
    <>
      {/* <div id="rel2">
        <b>DIV #3</b>
        <br />
        position: relative;
        <br />
        z-index: 2;
      </div> */}
      <></>
      <div id="abs2">
        <b>DIV #4</b>
        <br />
        position: absolute;
        <br />
        z-index: 1;
      </div>
      <Box sx={{ border: 1 }}>
        <img src="background.jpg" alt="img" />
      </Box>
      <h3>Shoulda Coulda</h3>
      <h5>Group Project</h5>
      <p></p>
      <a href="https://shouldacoulda.herokuapp.com/">check it out</a>
    </>
  );
}

export default Skills;
