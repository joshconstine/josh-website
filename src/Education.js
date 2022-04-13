import "./App.css";
import { Box, Typography } from "@mui/material";

function Experience() {
  return (
    <Box className="infoContainer contain">
      <a id="education" className="sections">
        Education
      </a>
      <Box className="horizontalLine" />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <p className="bold">2015-2020</p>
          <p>Computer Science</p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 500 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            San Diego Community College District
          </Typography>
          <p className="alignL">
            -On track to recieve an Associates Degree in computer science Spring
            2023.
          </p>
          <p className="alignL">
            -I plan on transfering to San Diego State University in the fall of
            2023.
          </p>
          <p className="alignL">
            I am interested in joining the robotics club when I return to San
            Diego.
          </p>
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <p className="bold">2022</p>
          <p>Web BootCamp</p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 500 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Fullstack Academy
          </Typography>
          <p className="alignL">
            -17-Week Fullstack JavaScript Web Development Immersive. Focused on
            the fundamentals of software enginnering.
          </p>

          <p className="alignL">
            -I learned core frameworks in javascript including React, Redux,
            Express, and more.
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
