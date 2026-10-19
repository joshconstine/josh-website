import "./App.css";
import { Box, Typography } from "@mui/material";

function Experience() {
  return (
    <Box className="infoContainer contain">
      <span id="experience" className="sections heading">
        Experience
      </span>
      <Box className="horizontalLine" />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box className="sideByside">
          <p className="bold">2022-current</p>
          <p>Software Engineer</p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 400 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Sorenson Communications
          </Typography>
          <p className="alignL">
            -Full stack engineer building and maintaining enterprise products
          </p>
          <p className="alignL">
            -Infrastructure as Code specialist, defining and managing cloud
            resources through code
          </p>
          <p className="alignL">
            -Build and maintain CI/CD pipelines that automate testing and
            deployment
          </p>
        </Box>
      </Box>
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
    </Box>
  );
}

export default Experience;
