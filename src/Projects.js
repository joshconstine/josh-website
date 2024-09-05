import "./App.css";
import { Box, Typography, Button } from "@mui/material";

function Projects() {
  return (
    <Box className="infoContainer contain ">
      <a id="projects" className="sections">
        Project
      </a>
      <Box className="horizontalLine" />
      <div className="video-responsive">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/2VZx3buiH6s?si=Hl9ETEcdmm-lxuni" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div> 
  
 
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <Box className="pop">
            <img src="mygoodrental.png" alt="img" className="projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
       
     <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
           My Good Rental 
          </Typography>
          <p className="alignL">
            -Booking engine for rental properties and boats
          </p>
          <p className="alignL">
            -Allows hosts to list their properties and boats for rent
          </p>
          <p className="alignL">
            -This application was built with golang, and is server rendered using html templates. Interactivity is accomplished using htmx
          </p>
          <div>
            <Button
              href="https://mygoodrental.com"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                check it out
              </Typography>
            </Button>{" "}
          </div>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <Box className="pop">
            <img src="foodley.png" alt="img" className="projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
       
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Foodley
          </Typography>
          <p className="alignL">
            -Serverless web application built with Nextjs, PlanetScaleDB
          </p>
          <p className="alignL">
            -Search and review Local Restaurants, Check out other users favorite
            restaurants.
          </p>
          <p className="alignL">
            -This application was built with typescript and supports end to end
            typesaftey with trpc
          </p>
          <div>
            <Button
              href="https://foodley.co"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                check it out
              </Typography>
            </Button>{" "}
            <Button
              secondary
              href="https://github.com/joshconstine/t3foodly"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                code
              </Typography>
            </Button>
          </div>
        </Box>
      </Box>{" "}
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <Box className="pop">
            <img src="Listify.png" alt="img" className="projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            Listify
          </Typography>
          <p className="alignL">
            -The <strong>O(Log(n))</strong>
            solution to grocery shopping
          </p>
          <p className="alignL">-This application was built with Go</p>

          <div>
            {/* <Button
              href="https://algo-attack.vercel.app/"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                check it out
              </Typography>
            </Button>{" "} */}
            <Button
              secondary
              href="https://github.com/joshconstine/firstgoproj"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                code
              </Typography>
            </Button>
          </div>
        </Box>
      </Box>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <Box className="sideByside">
          <Box className="pop">
            <img src="algo.png" alt="img" className="projectImg" />
          </Box>
        </Box>
        <Box
          className="verticalLine"
          sx={{ backgroundColor: "#282c34", height: 650 }}
        />
        <Box className="sideBysideR" sx={{ alignItems: "flex-start" }}>
          <Typography variant="p" sx={{ fontSize: 20, paddingTop: 1.5 }}>
            algo-attack
          </Typography>
          <p className="alignL">
            -Test your algorithm skills with this fun game built with
            React,Nextjs
          </p>
          <p className="alignL">-This application was built with typescript</p>

          <div>
            <Button
              href="https://algo-attack.vercel.app/"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                check it out
              </Typography>
            </Button>{" "}
            <Button
              secondary
              href="https://github.com/joshconstine/algo-attack"
              target="_blank"
              className="buttonlink"
              variant="outlined"
            >
              <Typography variant="p" sx={{ color: "blue" }}>
                code
              </Typography>
            </Button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
