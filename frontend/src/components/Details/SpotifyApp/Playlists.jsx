import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Stack, Typography } from "@mui/material";

function Playlists({ playlists }) {
  return (
    <Stack
      style={{
        overflowX: "auto",
      }}
      direction="row"
    >
      {playlists.map((playlist) => (
        <Card
          key={playlist.id}
          sx={{
            display: "flex",
            textAlign: "center",
            minWidth: "50vw",
            height: "50vw",
            transform: "scale(0.9)",
            bgcolor: "primary.main",
            color: "primary.lighter",
            flexDirection: "column",
          }}
        >
          {playlist.images.length ? (
            <img width="100%" src={playlist.images[0].url} alt="" />
          ) : (
            <div>No Image</div>
          )}
          <CardContent>
            <Typography variant="h5" sx={{ color: "secondary.main" }}>
              {playlist.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default Playlists;
