import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MediaControlCard from "./MediaControlCard";

function SpotifyApp() {
  return (
    <div
      id="playlist"
      className="SpotifyPlayer"
      style={{
        height: "70vh",
        paddingLeft: "1rem",
        backgroundColor: "inherit",
      }}
    >
      <Typography
        variant="h3"
        style={{ display: "flex", alignItems: "center", paddingBottom: "1rem" }}
      >
        <LibraryMusicIcon fontSize="large" /> Un peu de musique !
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
        style={{ height: "60vh" }}
      >
        <MediaControlCard />
      </Box>
    </div>
  );
}

export default SpotifyApp;
