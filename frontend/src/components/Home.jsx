/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import logo from "./Details/partyplace.png";
import formCountries from "../data/formCountries.json";

export default function Home() {
  const [country, setCountry] = useState(" ");

  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));

  const handleSubmitCountry = () => {
    localStorage.setItem("country", JSON.stringify(country));
    navigate("/details");
  };

function Home() {
  return console.warn("Spotify");
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js

Home.propTypes = {
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};