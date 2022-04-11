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
      <a id="skills" className="sections">
        Skills
      </a>
      <Box id="abs2">
        {skills.map((skill, i) => {
          return (
            <Box key={i} className="rel2">
              <Typography variant="p">{skill}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Skills;
