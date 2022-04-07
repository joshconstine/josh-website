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

const Navbar = () => {
  //we take in logout and current user so our navbar can display accuratley

  return (
    // <>
    <AppBar
      position="static"
      sx={{
        borderColor: "black",
      }}
    >
      <Container
        sx={{
          mr: 2,
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", sm: "center", md: "flex-end" },
        }}
      >
        <h1>Joshua Constine</h1>
      </Container>
    </AppBar>
  );
};

export default Navbar;
