import Typography from "@mui/material/Typography";
import { Button, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Welcomepage from "./Welcomepage";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Header />
      <Welcomepage />
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
          sx={{ borderRadius: "50%" }}
          id="user"
          label="Votre nom"
          type="text"
          onChange={(e) => setUser(e.target.value)}
          // sx={{ width: "70vw" }}
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
  );
}
