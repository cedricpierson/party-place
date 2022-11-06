import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import MediaControlCard from "./MediaControlCard";

function SpotifyApp() {
  return (
    <div
      className="SpotifyPlayer"
      style={{
        height: "55vh",
        paddingLeft: "1rem",
        backgroundColor: "inherit",
      }}
    >
      <Typography variant="h4">Un peu de musique !</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
        style={{ height: "40vh" }}
      >
        <MediaControlCard />
      </Box>
    </div>
  );
}

export default SpotifyApp;
