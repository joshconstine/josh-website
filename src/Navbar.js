import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import "./App.css";

const Navbar = () => {
  //we take in logout and current user so our navbar can display accuratley
  function scrollFunction1(name) {
    let e = document.getElementById(name);
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }
  return (
    // <>
    <AppBar
      position="fixed"
      sx={{
        borderColor: "black",
        backgroundColor: "#121417",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <Box
        sx={{
          mr: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center", md: "flex-end" },
        }}
      >
        <h1>Joshua Constine</h1>
      </Box>
      <Box
        sx={{
          borderColor: "black",
          width: 400,
          backgroundColor: "#121417",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <h6 onClick={() => scrollFunction1("about")} className="links">
          About
        </h6>
        <h6 onClick={() => scrollFunction1("experience")} className="links">
          Experience
        </h6>
        <h6 onClick={() => scrollFunction1("education")} className="links">
          Education
        </h6>
        <h6 onClick={() => scrollFunction1("projects")} className="links">
          Projects
        </h6>
        <h6 onClick={() => scrollFunction1("skills")} className="links">
          Skills
        </h6>
        <h6 onClick={() => scrollFunction1("contact")} className="links">
          Contact
        </h6>
      </Box>
    </AppBar>
  );
};

export default Navbar;
