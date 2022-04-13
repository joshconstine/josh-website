import "./App.css";
import { Box, Typography } from "@mui/material";

function Skills() {
  const skills = [
    "React",
    "Redux",
    "PostgreSQL",
    "Express",
    "Git",
    "Firebase",
    "Deployment",
    "Firebase",
  ];
  return (
    <>
      <Box sx={{ padding: 5, backgroundColor: "black" }}>
        <Typography
          variant="a"
          id="skills"
          sx={{ color: "white", fontSize: 30 }}
        >
          Skills
        </Typography>
      </Box>
      <Box
        id="abs2"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          gap: { xs: 0, sm: 0, md: 0, lg: 0 },
          flexWrap: { xs: "nowrap", sm: "nowrap", md: "nowrap", lg: "wrap" },
          alignItems: "center",
          width: "100%",
          height: 550,
          paddingTop: { xs: 1, sm: 1, md: 2, lg: 10 },
          paddingBottom: { xs: 1, sm: 1, md: 2, lg: 2 },
        }}
      >
        {skills.map((skill, i) => {
          return (
            <Box
              key={i}
              sx={{
                top: "20%",
                fontWeight: 400,
                color: "lightgreen",
                fontSize: { xs: 25, sm: 25, md: 25, lg: 30 },
                backgroundColor: "black",
                padding: { xs: 0.5, sm: 0.5, md: 0.5, lg: 3 },
                margin: { xs: 1, sm: 1, md: 1, lg: 5 },
                width: { xs: "30%", sm: "30%", md: "30%", lg: "15%" },
              }}
            >
              <Typography
                variant="p"
                sx={{
                  width: "100%",
                }}
              >
                {skill}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Skills;
