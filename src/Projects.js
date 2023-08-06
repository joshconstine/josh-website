import "./App.css";
import { Box, Typography, Button } from "@mui/material";

function Projects() {
  return (
    <Box className="infoContainer contain ">
      <a id="projects" className="sections">
        Project
      </a>
      <Box className="horizontalLine" />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <Box className="pop">
            <img src="foodley.png" alt="img" className="projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Foodley
          </Typography>
          <p className="alignL">
            - Serverless web application built with Nextjs, PlanetScaleDB
          </p>
          <p className="alignL">
            -Search and review Local Restaurants, Check out other users favorite
            restaurants.
          </p>
          <p className="alignL">
            -This application was built with typescript and supports end to end
            typesaftey with trpc
          </p>
          <div>
            <Button
              href="https://foodley.co"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                check it out
              </Typography>
            </Button>{" "}
            <Button
              secondary
              href="https://github.com/joshconstine/t3foodly"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                code
              </Typography>
            </Button>
          </div>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <Box className="pop">
            <img src="algo.png" alt="img" className="projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            algo-attack
          </Typography>
          <p className="alignL">
            - Test your algorithm skills with this fun game built with
            React,Nextjs
          </p>
          <p className="alignL">-This application was built with typescript</p>

          <div>
            <Button
              href="https://algo-attack.vercel.app/"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                check it out
              </Typography>
            </Button>{" "}
            <Button
              secondary
              href="https://github.com/joshconstine/algo-attack"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                code
              </Typography>
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
