import React, { useEffect } from "react";
import { PropTypes } from "prop-types";
import Iframe from "react-iframe";
import data from "../../../data/data.json";

export default function EmbedPlayer({ playlistId, setPlaylistId, country }) {
  useEffect(() => {
    if (!playlistId) {
      setPlaylistId(data[country].defaultPlaylistId);
    }
  }, []);

  return (
    <div>
      <Iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
        width="100%"
        height="560"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

EmbedPlayer.propTypes = {
  playlistId: PropTypes.string.isRequired,
  setPlaylistId: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
};
