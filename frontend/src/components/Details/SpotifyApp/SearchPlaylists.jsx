/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Playlists from "./Playlists";

export default function SearchPlaylists({ playlistId, setPlaylistId }) {
  const CLIENT_ID = "18d0d84374f94718a9e898e89b678bd2";
  const REDIRECT_URI = "http://localhost:3000/details";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const { hash } = window.location;
    let tokenUrl = window.localStorage.getItem("token");

    // getToken()
    if (!tokenUrl && hash) {
      tokenUrl = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", tokenUrl);
    }

    setToken(tokenUrl);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchPlaylists = (e) => {
    e.preventDefault();
    axios
      .get("https://api.spotify.com/v1/search?&limit=5", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "playlist",
        },
      })
      .then((res) => res.data)
      .then((data) => setPlaylists(data.playlists.items));
  };

  return (
    <div>
      <Box style={{ margin: "1rem", width: "100vw" }}>
        <Typography
          variant="h3"
          sx={{ color: "secondary.main" }}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
          id="playlist"
        >
          <LibraryMusicIcon fontSize="Large" />
          Playlists
        </Typography>

        {token ? (
          <form onSubmit={searchPlaylists}>
            <TextField
              id="standard-basic"
              label="Rechercher"
              onChange={(e) => setSearchKey(e.target.value)}
              sx={{ width: "70vw", maxWidth: "400px" }}
            />
            <Button type="submit">
              <SearchIcon sx={{ fontSize: 45 }} />
            </Button>
            <Button onClick={logout}>Déconnexion</Button>
          </form>
        ) : (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            style={{ textDecoration: "none" }}
          >
            <Stack
              direction="row"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
              </IconButton>
              <h4>Se connecter à Spotify</h4>
            </Stack>
          </a>
        )}
      </Box>
      <Playlists
        playlists={playlists}
        playlistId={playlistId}
        setPlaylistId={setPlaylistId}
      />
    </div>
  );
}

SearchPlaylists.propTypes = {
  playlistId: PropTypes.string.isRequired,
  setPlaylistId: PropTypes.func.isRequired,
};
