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
const MARRIED_ON = new Date(2018, 8, 20);

function yearsSince(date) {
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  const hadAnniversary =
    now.getMonth() > date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() >= date.getDate());
  if (!hadAnniversary) years--;
  return years;
}

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
          I am a Software Engineer and an MBA student at the UC San Diego Rady
          School of Management. I build websites and applications that are
          functional and user-friendly, including My Good Rental, a booking
          platform for vacation rentals, boats, and event venues. I have always
          had dreams to live an exceptional life full of trying new things
          outside of my comfort zone and mastering them. I thrive when
          surrounded by like-minded individuals who are open to growing, trying
          new things, and learning how to succeed at them.
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
            for {yearsSince(MARRIED_ON)} years, and we have three kids
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
            In my free time I enjoy cooking, trying new restaurants, coding,
            fishing, gardening, and spending time outside
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
            Fun Fact: I am from Wisconsin and love to eat cheese while watching
            the Green Bay Packers
          </p>
        </Box>
      </Container>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <h1>photos here</h1>
      </Collapse>
    </Box>
  );
}

export default About;
