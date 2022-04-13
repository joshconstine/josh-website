import "./App.css";
import { Box, Typography } from "@mui/material";

function Skills() {
  const skills = [
    "React",
    "Redux",
    "postgreSQL",
    "Express",
    "Git",
    "Firebase",
    "Deployment",
    "communication",
  ];
  return (
    <>
      <Box sx={{ padding: 5 }}>
        <Typography variant="a" sx={{ color: "white", fontSize: 30 }}>
          Skills
        </Typography>
      </Box>
      <Box id="abs2">
        {skills.map((skill, i) => {
          return (
            <Box
              key={i}
              sx={{
                top: "20%",
                width: "20%",
                fontWeight: 600,
                color: "lightgreen",
                fontSize: 40,
              }}
            >
              <Typography variant="p">{skill}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Skills;
