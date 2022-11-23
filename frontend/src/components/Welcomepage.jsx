import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImg from "../assets/champagne3.jpg";

function Welcomepage() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  }

  const userName = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!userName) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    return setUser(userName);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "20px",
        color: "#2E266F",
        backgroundImage: `url(${bgImg})`,
        minHeight: "80%",
        backgroundSize: "cover",
      }}
    >
      <div
        sx={{ color: "secondary.main" }}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          fontSize: "20px",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        <h5>Un apéro dinatoire aux couleurs de l'Italie?</h5>
        <h5>Votre anniversaire au rythme de la salsa?</h5>
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              height: "100vh",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "secondary.main" }}
              style={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                marginBottom: "1rem",
                marginTop: "2rem",
              }}
              id="playlist"
            >
              Laissez-vous guider
            </Typography>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                sx={{ borderRadius: "5px" }}
                id="user"
                label="Votre nom"
                type="text"
                style={{ backgroundColor: "white" }}
                onChange={(e) => setUser(e.target.value)}
                // sx={{ width: "70vw" }}
                required
              />

              <Button
                sx={{ borderRadius: "20px", m: "0.3rem" }}
                variant="outlined"
                type="submit"
                style={{ color: "#2E266F", border: "none" }}
              >
                C'est Party!
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Welcomepage;
