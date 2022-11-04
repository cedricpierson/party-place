import React from "react";
import { Box } from "@mui/material";
import MediaControlCard from "./MediaControlCard";

function SpotifyApp() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        minHeight: "100vh",
      }}
    >
      <MediaControlCard />
    </Box>
  );
}

export default SpotifyApp;
