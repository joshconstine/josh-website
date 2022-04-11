import "./App.css";
import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  TableBody,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  CardActions,
  SvgIcon,
  Container,
} from "@mui/material";
import styled from "@emotion/styled";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function About() {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedFourm, setExpandedfourm] = React.useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
  }));
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box className="column">
      <Box className="paragraph font">
        <a className="sections">Hi there! I'm Josh</a>

        <p>
          I am a Software Engineering professional with expertise in developing
          websites that are functional and user-friendly. My path into this
          industry was an unconventional one. As a Marine Corps Veteran, I
          believe serving our country for 5 years right out of high school led
          me here. I have always had dreams to live an exceptional life full of
          trying new things outside of my comfort zone and mastering them. I
          thrive when surrounded by like-minded individuals who are open to
          growing, trying new things, and learning how to succeed at them.
        </p>
      </Box>
      <a>Get to Know Me</a>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: { xs: "wrap", sm: "nowrap", md: "nowrap", lg: "nowrap" },
          flexDiredction: { xs: "row", sm: "row", md: "row" },
        }}
      >
        <Box
          className="smallBox"
          sx={{ width: { xs: 300, sm: 300, md: 160, lg: 160 } }}
        >
          <p>
            I have been happily married to my High School sweetheart, Alyssia,
            for just under 4 years
          </p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ height: { xs: 0, sm: 160, md: 160, lg: 160 } }}
        />
        <Box
          className="smallBox"
          sx={{ width: { xs: 300, sm: 160, md: 160, lg: 160 } }}
        >
          <p>
            We have a dog, Brandy, who is our very energetic Australian Shepherd
          </p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ height: { xs: 0, sm: 160, md: 160, lg: 160 } }}
        />
        <Box
          className="smallBox"
          sx={{ width: { xs: 300, sm: 160, md: 160, lg: 160 } }}
        >
          <p>
            In my freetime I enjoy cooking, trying new restaurants, gaming, and
            spending time outside
          </p>
        </Box>
        <Box
          className="verticalLine"
          sx={{ height: { xs: 0, sm: 160, md: 160, lg: 160 } }}
        />
        <Box
          className="smallBox"
          sx={{ width: { xs: 300, sm: 160, md: 160, lg: 160 } }}
        >
          <p>
            Fun Fact: This past year my wife and I bought our first house and
            completely renovated it from the top to bottom
          </p>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
      </Container>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <h1>photos here</h1>
      </Collapse>

      <Box className="paragraph font">
        <a className="spaceAbove">What Sets Me Apart</a>
        <p>
          If one thing should stick out about me, It should be my ability to
          perform superiorly at a highly-technical position without any
          background experience. An example of this would be when I joined the
          military and learned how to work on F-18 fighter jets. During my
          previous role as an F-18 Mechanic and Quality Assurance
          Representative, I had to learn the hands on operations of aircraft
          maintenance and also had to learn from highly technical publications.
          I thrived in this environment and was eventually promoted to Sergeant
          status where I became a shift supervisor for over 2 years.
        </p>
        <p>
          Another example of this is when I made the hard decision of leaving
          the military to pursue my software engineering career. I started
          taking classes at San Diego Community College District, which is where
          I continue to take classes on the side in order to pursue my goal of
          getting my BS Degree in Computer Science. Learning how to build unique
          frame-works and web applications is absolutely fascinating to me and I
          find myself spending the majority of my time learning as much as I can
          about building quality systems that are user-friendly and beautiful.
          This passion is what led me to join Fullstack Academy, a 17-week
          Fullstack JavaScript Web Development Immersive that is centered on
          learning the fundamentals of full-stack web development. After
          completely diving in, I am excited to start my career as a software
          engineer.
        </p>
      </Box>
    </Box>
  );
}

export default About;
