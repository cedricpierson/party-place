import React from "react";
import Button from "@mui/material/Button";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=18d0d84374f94718a9e898e89b678bd2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20playlist-read-collaborative%20playlist-read-private";

function Login() {
  return (
    <div>
      <Button variant="outlined" href={AUTH_URL}>
        Se connecter à Spotify
      </Button>
    </div>
  );
}

export default Login;
