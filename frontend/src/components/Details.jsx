import React from "react";
import { Box } from "@mui/material";
import MobileButtonNav from "./Details/MobileButtonNav";
import SpotifyApp from "./Details/SpotifyApp";

function Details() {
  return (
    <div>
      <Box>
        <SpotifyApp />
        <MobileButtonNav />
      </Box>
    </div>
  );
}

export default Details;
