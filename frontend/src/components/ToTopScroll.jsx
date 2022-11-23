import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default function ToTopScroll() {
  return (
    <div>
      <Root>
        <Button variant="text">
          <a href="#to-top">
            <KeyboardArrowUpIcon
              style={{
                fontSize: "3rem",
                backgroundColor: "#C2A835",
                color: "white",
                borderRadius: "50%",
                position: "fixed",
                bottom: 0,
                right: 0,
                marginRight: "2rem",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
            />
          </a>{" "}
        </Button>
      </Root>
    </div>
  );
}
