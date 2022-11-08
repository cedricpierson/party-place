/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Stack } from "@mui/material";

function ClientCredentials() {
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

  const searchPlaylists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://api.spotify.com/v1/search?&limit=5",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "playlist",
        },
      }
    );

    setPlaylists(data.playlists.items);
  };

  const renderPlaylists = () => {
    return (
      <div>
        <Stack
          style={{
            height: "65vh",
            maxHeight: "65vh",
            overflowX: "scroll",
            alignItems: "center",
          }}
          direction="row"
          spacing={1}
        >
          {playlists.map((playlist) => (
            <Card
              key={playlist.id}
              sx={{
                textAlign: "center",
                width: "50vw",
                transform: "scale(0.9)",
                bgcolor: "primary.main",
                color: "primary.lighter",
              }}
            >
              {playlist.images.length ? (
                <img width="100%" src={playlist.images[0].url} alt="" />
              ) : (
                <div>No Image</div>
              )}
              <h5>{playlist.name}</h5>
            </Card>
          ))}
        </Stack>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Playlists</h1>

        {token ? (
          <form onSubmit={searchPlaylists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <Button type="submit">Rechercher</Button>
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

        {renderPlaylists()}
      </header>
    </div>
  );
}

export default ClientCredentials;
