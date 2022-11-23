import * as React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
function Footer() {
  return (
    <Root>
      <div
        style={{
          backgroundColor: "#C2A835",
          bottom: "0",
          width: "100%",
          minHeight: "30vh",
        }}
        className="main-footer"
      >
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            paddingBottom: "1rem",
            paddingTop: "1rem",
            fontSize: "large",
          }}
        >
          <TwitterIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />{" "}
          <FacebookIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />{" "}
          <LinkedInIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "18px",
          }}
        >
          <a
            href="/"
            style={{ textDecoration: "none", fontSize: "18px", color: "white" }}
          >
            Mentions Légales
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "1 rem",
          }}
          className="row"
        >
          <p
            style={{
              fontSize: "18px",
              color: "white",
              textdecorationLine: "none",
              paddingTop: "18px",
              paddingBottom: "18px",
            }}
          >
            &copy;{new Date().getFullYear()} The spices Guys
          </p>
        </div>
      </div>
    </Root>
  );
}

export default Footer;
