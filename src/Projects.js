import "./App.css";
import { Box, Typography, Button } from "@mui/material";

function Projects() {
  return (
    <Box className="infoContainer contain ">
      <a id="projects" className="sections">
        Projects
      </a>
      <Box className="horizontalLine" />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          {/* <p className="bold">2022</p> */}
          <p>Personal Project</p>
          <Box className="pop">
            <img src="apptracker.jpg" alt="img" className="projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Application Tracker
          </Typography>
          <p className="alignL">
            - Web application aimed to help orginize a professional job search.
          </p>
          <p className="alignL">
            -Allows a user to be able to save relevant information regarding a
            job application.
          </p>
          <p className="alignL">
            -I am currently adding to this project. Upcomming features include a
            callendar, a template system in order to quickly generate documents,
            and a event handler.
          </p>
          <p className="alignL">
            -utilized git version controll to protect our production version.
          </p>

          <Button
            href="https://applicatintrackerco.netlify.app/"
            className="buttonlink"
            variant="outlined"
          >
            <Typography variant="p" sx={{ color: "blue" }}>
              check it out
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          {/* <p className="bold">2022</p> */}
          <p>Fullstack Academy Capstone Project</p>
          <Box className="pop">
            <img src="shouldacoulda.jpg" alt="img" className="projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Shoulda Coulda
          </Typography>
          <p className="alignL">
            - Fullstack web application aimed to help track, and lower a users
            montly expenses by encouraging investing.
          </p>
          <p className="alignL">
            -utilizes Google Firebase features including authentication and
            realtime database
          </p>
          <p className="alignL">
            -worked in a group with 3 other software engineers in a agile
            development setting
          </p>
          <p className="alignL">
            -utilized git version controll to protect our production version.
          </p>

          <Button
            href="https://shouldacoulda.herokuapp.com/"
            className="buttonlink"
            variant="outlined"
          >
            <Typography variant="p" sx={{ color: "blue" }}>
              check it out
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          {/* <p className="bold">2022</p> */}
          <p>Group Project</p>
          <Box className="pop">
            <img src="PlainGray.png" alt="img" className=" projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Plain Grey T's
          </Typography>
          <p className="alignL">- Fullstack e-commerce application </p>
          <p className="alignL">-Utilized secure authentication /API routes</p>
          <p className="alignL">
            -worked in a group with 3 other software engineers to collaborate,
            and create this application
          </p>
          <p className="alignL">
            -utilized git version controll to protect our production version.
          </p>

          <Button
            href="https://grace-shopper-snivy.herokuapp.com/"
            className="buttonlink"
            variant="outlined"
          >
            <Typography variant="p" sx={{ color: "blue" }}>
              check it out
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
