import "./App.css";
import { Box, Typography } from "@mui/material";
import { display, fontWeight } from "@mui/system";

function Experience() {
  return (
    <Box className="infoContainer contain">
      <a id="experience" className="sections">
        Experience
      </a>
      <Box className="horizontalLine" />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <p className="bold">2015-2020</p>
          <p>F-18 Airframes Mechanic</p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 500 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Marine Corps
          </Typography>
          <p className="alignL">
            -Completed complex maintenance and troubleshooting of Military
            Aircraft
          </p>
          <p className="alignL">
            -Worked as a Quality Assurance Representative responsible directly
            to the Aircraft Maintenance Officer
          </p>
          <p className="alignL">
            -Direct supervisor of 12 Marines through managing quality and safety
            processes essential to the operation of military aircraft
          </p>
          <p className="alignL">
            -Prioritized and delegated an ever-changing workload
          </p>
          <p className="alignL">
            -Led day-to-day operations as well as administrative duties such as
            implementing policies, discipline, and mentorship
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Box className="sideByside">
          <p className="bold">2022-current</p>
          <p>Software Engineer</p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 300 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Sorenson Communications
          </Typography>
          <p className="alignL">
            -Work as a front end developer. Created a customer facing web
            application using React.js
          </p>
          <p className="alignL">
            -Work with a team of developers to create a web application that
            allows customers to manage their video conferencing services.
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
