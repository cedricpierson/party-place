/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import Playlists from "./Playlists";

function SearchPlaylists() {
  const CLIENT_ID = "18d0d84374f94718a9e898e89b678bd2";
  const REDIRECT_URI = "http://localhost:3000";
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

  const searchPlaylists = () => {
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
              sx={{ width: "70vw" }}
            />
            <Button type="submit">
              <SearchIcon />
            </Button>
          </form>
        ) : (
          <h4>Se connecter à Spotify</h4>
        )}

        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Connexion
          </a>
        ) : (
          <Button onClick={logout}>Déconnexion</Button>
        )}
      </Box>
      <Playlists playlists={playlists} />
    </div>
  );
}
export default SearchPlaylists;
