import "./App.css";
import { Box, Typography } from "@mui/material";

function Experience() {
  return (
    <Box className="infoContainer contain">
      <a id="education" className="sections">
        Education
      </a>
      <Box className="horizontalLine" />{" "}
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <p className="bold">2023</p>
          <p>Pursuing Bachelors Degree</p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 500 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            San Diego State University
          </Typography>
          <p className="alignL">
            -Woking towards a Bachelors Degree in Computer Science.
          </p>
          <p className="alignL">
            - coursework includes: Data Structures, Algorithms, software
            systems, and more.
          </p>
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <p className="bold">2020-2023</p>
          <p>Associates Degree Computer Science</p>
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
            -Leaned the fundamentals of computer science including data
            structures, algorithms, and object oriented programming.
          </p>
          <p className="alignL">
            - Colaborated with other students to complete projects and
            assignments.
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
