import React, { useState } from "react";
import { PropTypes } from "prop-types";
import SearchPlaylists from "./SpotifyApp/SearchPlaylists";
import EmbedPlayer from "./SpotifyApp/EmbedPlayer";

export default function SpotifyApp({ country }) {
  const [playlistId, setPlaylistId] = useState("");
  return (
    <div>
      <SearchPlaylists playlistId={playlistId} setPlaylistId={setPlaylistId} />
      <EmbedPlayer
        playlistId={playlistId}
        setPlaylistId={setPlaylistId}
        country={country}
      />
    </div>
  );
}

SpotifyApp.propTypes = {
  country: PropTypes.string.isRequired,
};
