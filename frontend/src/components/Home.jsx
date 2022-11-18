/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "./Details/partyplace.png";
import formCountries from "../data/formCountries.json";
import Afrique from "./Home/Afrique";
import AmeriqueNord from "./Home/AmeriqueNord";
import AmeriqueLatine from "./Home/AmeriqueLatine";
import Asie from "./Home/Asie";
import Europe from "./Home/Europe";

export default function Home() {
  const [country, setCountry] = useState(" ");

  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleSubmitCountry = () => {
    localStorage.setItem("country", JSON.stringify(country));
    navigate("/details");
  };

  return (
    <div className="Details Page" sx={{ bgcolor: "#primary.light" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#D9C468",
        }}
      >
        <Link to="/">
          <img src={logo} alt="Party Place Logo" height="100%" />
        </Link>
      </div>
      <Typography
        variant="h4"
        sx={{ color: "secondary.main" }}
        style={{
          margin: "1rem",
        }}
        id="username"
      >
        Salut {userName.toUpperCase()} !
      </Typography>
      <Typography
        variant="h3"
        sx={{ color: "secondary.main" }}
        style={{
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
        id="programme"
      >
        Où Allons Nous Ce Soir ?
      </Typography>
      <Autocomplete
        inputValue={country}
        onInputChange={(event, newInputValue) => {
          setCountry(newInputValue);
        }}
        id="country-select-demo"
        sx={{
          width: 300,
          margin: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
        options={formCountries.countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <form
            onSubmit={handleSubmitCountry}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "80vw",
              maxWidth: "450",
            }}
          >
            <TextField
              {...params}
              label="Choisir un pays"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
              onChange={(e) => setCountry(e.target.value)}
            />
            <Button
              sx={{ borderRadius: "20px", m: "0.3rem" }}
              variant="outlined"
              type="submit"
            >
              C'est Party!
            </Button>
          </form>
        )}
      />
      <Typography
        variant="h3"
        sx={{ color: "secondary.main" }}
        style={{
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
        id="programme"
      >
        Afrique
      </Typography>
      <Afrique />
      <Typography
        variant="h3"
        sx={{ color: "secondary.main" }}
        style={{
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
        id="programme"
      >
        Amérique du Nord
      </Typography>
      <AmeriqueNord />
      <Typography
        variant="h3"
        sx={{ color: "secondary.main" }}
        style={{
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
        id="programme"
      >
        Amérique Latine
      </Typography>
      <AmeriqueLatine />
      <Typography
        variant="h3"
        sx={{ color: "secondary.main" }}
        style={{
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
        id="programme"
      >
        Asie
      </Typography>
      <Asie />
      <Typography
        variant="h3"
        sx={{ color: "secondary.main" }}
        style={{
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
        id="programme"
      >
        Europe
      </Typography>
      <Europe />
    </div>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

Home.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};
