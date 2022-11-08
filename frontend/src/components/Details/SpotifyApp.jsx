import React from "react";
import { Box } from "@mui/material";
import ClientCredentials from "./SpotifyApp/ClientCredentials";
// import Login from "./SpotifyApp/Login";
import MediaControlCard from "./SpotifyApp/MediaControlCard";

function SpotifyApp() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <ClientCredentials />
      </Box>
      <Box>
        <MediaControlCard />
      </Box>
    </div>
  );
}

export default SpotifyApp;
