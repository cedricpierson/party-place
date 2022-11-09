import React from "react";
import SearchPlaylists from "./SpotifyApp/SearchPlaylists";
// import Login from "./SpotifyApp/Login";
import EmbedPlayer from "./SpotifyApp/EmbedPlayer";

function SpotifyApp() {
  return (
    <div>
      <SearchPlaylists />
      <EmbedPlayer />
    </div>
  );
}

export default SpotifyApp;
