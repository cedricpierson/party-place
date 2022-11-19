import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Menuburger from "./MenuBurger";
import Footer from "./Footer";

export default function Landing() {
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
    <div>
      <Menuburger sx={{ zIndex: "1000" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
        }}
      >
        <Typography
          variant="h3"
          sx={{ color: "secondary.main", zIndex: "1200" }}
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
          id="playlist"
        >
          Laissez-Vous Guider
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
            sx={{
              borderRadius: "7px",
              width: "80vw",
              maxWidth: "500px",
              zIndex: "1200",
              backgroundColor: "primary.contrastText",
            }}
            id="user"
            label="Votre nom"
            type="text"
            onChange={(e) => setUser(e.target.value)}
            required
          />

          <Button
            sx={{ borderRadius: "20px", m: "0.3rem" }}
            variant="outlined"
            type="submit"
          >
            C'est Party!
          </Button>
        </form>
      </Box>
      <Footer />
    </div>
  );
}
