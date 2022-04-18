import "./App.css";
import React, { useState } from "react";
import {
  Typography,
  Box,
  Link,
  IconButton,
  Collapse,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from "@emotion/styled";

function Contact() {
  return (
    <Box className="column" sx={{ paddingBottom: 15 }}>
      <Box className="paragraph font">
        <a className="sections" id="contact">
          Contact Me
        </a>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexWrap: { xs: "wrap", sm: "nowrap", md: "nowrap", lg: "nowrap" },
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column ",
            lg: "row",
          },
        }}
      >
        <form
          target="_blank"
          action="https://formsubmit.co/d13d1430400e65fd09defe4cefcb27d3"
          method="POST"
        >
          <Box
            sx={{
              borderRadius: 5,

              backgroundColor: "#f2f2f2",
              padding: 5,
              display: "flex",
              flexWrap: {
                xs: "nowrap",
                sm: "nowrap",
                md: "wrap",
                lg: "wrap",
              },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
              },
              marginRight: { xs: 0, sm: 5, md: 5, lg: 0 },
              marginLeft: { xs: 0, sm: 5, md: 5, lg: 5 },
              width: { xs: "75%", sm: 369.33, md: 580, lg: 500 },
            }}
          >
            <Box
              sx={{
                padding: { xs: 0, sm: 0, md: 1, lg: 1 },
                width: { xs: "95%", sm: "95%", md: "45%", lg: "45%" },
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="verdana"
                required
              />
            </Box>
            <Box
              sx={{
                padding: { xs: 0, sm: 0, md: 1, lg: 1 },
                width: { xs: "95%", sm: "95%", md: "45%", lg: "45%" },
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="verdana"
                required
              />
            </Box>
            <Box sx={{ width: { xs: "95%", sm: "95%", md: "95%", lg: "95%" } }}>
              <textarea
                placeholder="Your Message"
                name="message"
                rows="10"
                className="verdana"
                required
              ></textarea>
            </Box>
            <Box
              sx={{
                width: 100,
                alignSelf: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              <Button
                type="submit"
                className="submitbtn"
                sx={{ color: "gray", border: 1, borderColor: "grey" }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </form>
        <Box
          className="verticalLine"
          sx={{
            positionSelf: "center",
            height: { xs: 0, sm: 0, md: 0, lg: 360 },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 5,
            padding: 5,
            display: "flex",
            alignItems: "center",
            marginRight: { xs: 0, sm: 5, md: 5, lg: 0 },
            marginLeft: { xs: 0, sm: 5, md: 5, lg: 5 },
            width: { xs: "75%", sm: 369.33, md: 580, lg: 500 },
          }}
        >
          <Typography variant="h5" sx={{ color: "white", marginBottom: 1 }}>
            Connect With Me
          </Typography>
          <Box
            sx={{
              width: 200,
              border: 1,
              height: 1,
              borderWidth: "thin",
              borderColor: "white",
              marginBottom: 3,
            }}
          />
          <Link
            href="https://github.com/joshconstine"
            target="_blank"
            rel="noreferrer noopener"
            varient="h4"
            className="link"
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/joshua-constine/"
            target="_blank"
            rel="noreferrer noopener"
            varient="h4"
            className="link"
          >
            LinkedIn
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
