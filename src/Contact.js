import "./App.css";
import React, { useState } from "react";
import { Typography, Box, Link, IconButton, Collapse } from "@mui/material";
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
          flexWrap: { xs: "wrap", sm: "nowrap", md: "nowrap", lg: "nowrap" },
          flexDirection: { xs: "column", sm: "column", md: "row ", lg: "row" },
        }}
      >
        <Box className="container">
          <form
            target="_blank"
            action="https://formsubmit.co/d13d1430400e65fd09defe4cefcb27d3"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit" className="submitbtn">
              Submit Form
            </button>
          </form>
        </Box>
        <Box
          className="verticalLine"
          sx={{ height: { xs: 0, sm: 360, md: 360, lg: 360 } }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p className="font">(920) 265-7335</p>
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
