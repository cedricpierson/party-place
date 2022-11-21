/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "./Details/partyplace.png";
import formCountries from "../data/formCountries.json";
import Afrique from "./Home/Afrique";
import AmeriqueNord from "./Home/AmeriqueNord";
import AmeriqueLatine from "./Home/AmeriqueLatine";
import Asie from "./Home/Asie";
import Europe from "./Home/Europe";
import Menuburger from "./MenuBurger";
import Footer from "./Footer";
import ToTopScroll from "./ToTopScroll";
import continents from "../data/continents.json";

export default function Home() {
  const [country, setCountry] = useState(" ");

  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleSubmitCountry = (e) => {
    let country = e.target.outerText;
    localStorage.setItem("country", JSON.stringify(country));
    navigate("/details");
  };
  const handleSubmitForm = () => {
    localStorage.setItem("country", JSON.stringify(country));
    navigate("/details");
  };

  return (
    <div
      className="Details-Page"
      id="to-top"
      sx={{ bgcolor: "#primary.light" }}
    >
      <Stack width={{ xs: "83vw", sm: "100vw" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D9C468",
          }}
        >
          <Menuburger />
          <Link to="/">
            <img src={logo} alt="Party Place Logo" />
          </Link>
        </div>
        <Typography
          variant="h4"
          sx={{
            color: "secondary.main",
          }}
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
            width: "80vw",
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
            width: "83vw",
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
              onSubmit={handleSubmitForm}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "70vw",
                maxWidth: "450",
              }}
            >
              <TextField
                {...params}
                label="Choisir un pays"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
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
        <h6 style={{ margin: "0 0 1rem 1rem" }}>
          {Object.keys(continents.Afrique).map((continent) => (
            <span
              onClick={handleSubmitCountry}
              style={{
                textDecoration: "none",
                color: "#000",
                margin: "0 0.3rem",
              }}
            >
              {continent}
            </span>
          ))}
        </h6>
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
          Amérique Latine
        </Typography>

        <h6 style={{ margin: "0 0 1rem 1rem" }}>
          {Object.keys(continents["Amérique Latine"]).map((continent) => (
            <span
              onClick={handleSubmitCountry}
              style={{
                textDecoration: "none",
                color: "#000",
                margin: "0 0.3rem",
              }}
            >
              {continent}
            </span>
          ))}
        </h6>
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
          Amérique du Nord
        </Typography>

        <h6 style={{ margin: "0 0 1rem 1rem" }}>
          {Object.keys(continents["Amérique du Nord"]).map((continent) => (
            <span
              onClick={handleSubmitCountry}
              style={{
                textDecoration: "none",
                color: "#000",
                margin: "0 0.3rem",
              }}
            >
              {continent}
            </span>
          ))}
        </h6>
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
          Asie
        </Typography>
        <h6 style={{ margin: "0 0 1rem 1rem" }}>
          {Object.keys(continents.Asie).map((continent) => (
            <span
              onClick={handleSubmitCountry}
              style={{
                textDecoration: "none",
                color: "#000",
                margin: "0 0.3rem",
              }}
            >
              {continent}
            </span>
          ))}
        </h6>
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

        <h6 style={{ margin: "0 0 1rem 1rem" }}>
          {Object.keys(continents.Europe).map((continent) => (
            <span
              onClick={handleSubmitCountry}
              style={{
                textDecoration: "none",
                color: "#000",
                margin: "0 0.3rem",
              }}
            >
              {continent}
            </span>
          ))}
        </h6>
        <Europe />
        <ToTopScroll />
        <Footer />
      </Stack>
    </div>
  );
}

Home.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};
