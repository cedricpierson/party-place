import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
// import { red, green, blue } from "@mui/material/colors";

const Root = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function Menuburger() {
  const [open, setState] = useState(false);
  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <Root>
      <AppBar
        sx={{
          width: "17vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#C2A835",
        }}
      >
        <Container sx={{ bgcolor: "#C2A835" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0",
              marginRight: "1rem",
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{
                display: {
                  xs: "block",
                },
              }}
            >
              <MenuIcon style={{ display: "flex", alignItems: "center" }} />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
              // from which side the drawer slides in
              anchor="right"
              // if open is true --> drawer is shown
              open={open}
              // function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              // function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
            >
              {/* The inside of the drawer */}
              <Box
                sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#C2A835",
                }}
              >
                {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                <IconButton sx={{ mb: 2, color: "white" }}>
                  <CloseIcon onClick={toggleDrawer(false)} />
                </IconButton>

                <Divider sx={{ mb: 2 }} />

                <Box sx={{ mb: 2, width: "20vh" }}>
                  <ListItemButton>
                    <ListItemText primary="Home" sx={{ color: "white" }} />
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemText primary="Contact" sx={{ color: "white" }} />
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemText
                      primary="Mentions légales"
                      sx={{ color: "white" }}
                    />
                  </ListItemButton>
                </Box>

                {/* <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%, 0)",
                  }}
                ></Box> */}
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </Root>
  );
}
