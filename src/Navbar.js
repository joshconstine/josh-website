import React, { useEffect, useState } from "react";
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
  const [classNames, setClassNames] = useState([
    "selected",
    "",
    "",
    "",
    "",
    "",
  ]);

  function scrollFunction1(event, name, i) {
    event.preventDefault();

    event.target.className = name + " selected";
    let e = document.getElementById(name);
    e.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
    handleSelected(i);
  }
  function handleSelected(i) {
    let data = [];
    classNames.map((elem, index) => {
      if (index === i) {
        data.push("selected");
      } else {
        data.push("");
      }
    });
    setClassNames(data);
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
        <h6
          onClick={(e) => scrollFunction1(e, "about", 0)}
          className={`links ${classNames[0]}`}
        >
          About
        </h6>
        <h6
          onClick={(e) => scrollFunction1(e, "experience", 1)}
          className={`links ${classNames[1]}`}
        >
          Experience
        </h6>
        <h6
          onClick={(e) => scrollFunction1(e, "education", 2)}
          className={`links ${classNames[2]}`}
        >
          Education
        </h6>
        <h6
          onClick={(e) => scrollFunction1(e, "projects", 3)}
          className={`links ${classNames[3]}`}
        >
          Projects
        </h6>
        {/* <h6
          onClick={(e) => scrollFunction1(e, "skills", 4)}
          className={`links ${classNames[4]}`}
        >
          Skills
        </h6> */}
      </Box>
    </AppBar>
  );
};

export default Navbar;
