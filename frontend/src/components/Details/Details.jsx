import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material/";
import PlaceIcon from "@mui/icons-material/Place";
import drinks from "./Divers/ApiSim2";
import meals from "./Divers/ApiSim";
import MealList from "./MealListCreator";
import CocktailList from "./CocktailListCreator";
import MobileButtonNav from "./MobileButtonNav";
import logo from "./partyplace.png";
import SpotifyApp from "./SpotifyApp";
import data from "../../data/data.json";

export default function Details() {
  const country = JSON.parse(localStorage.getItem("country"));
  const alcool1 = data[country.alcool1];
  const userName = JSON.parse(localStorage.getItem("user"));
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
        variant="h2"
        sx={{ color: "secondary.main" }}
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          marginTop: "0.2rem",
          marginLeft: "1rem",
        }}
        id="programme"
      >
        Au Programme
      </Typography>
      <Card
        style={{
          margin: "1rem 1rem 1rem 0",
          display: "flex",
          justifyContent: "flex-start",
        }}
        sx={{
          display: "flex",
          bgcolor: "primary.main",
          borderRadius: "0 20px 20px 0",
        }}
      >
        <Typography
          variant="h2"
          style={{ display: "flex", alignItems: "center" }}
          sx={{ color: "primary.lighter", marginLeft: "1rem" }}
        >
          <PlaceIcon fontSize="Large" />
          {country}
        </Typography>
      </Card>
      <MealList
        sx={{ margin: "1rem" }}
        id="meal"
        mealApiItems={meals}
        country={country}
      />
      <CocktailList
        sx={{ margin: "1rem" }}
        id="cocktail"
        cocktailApiItems={drinks}
        listAlcool={alcool1}
      />
      <SpotifyApp sx={{ margin: "1rem" }} country={country} />
      <MobileButtonNav element1={MealList} />
    </div>
  );
}
