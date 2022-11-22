import React from "react";
import { Card, Typography } from "@mui/material/";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import getAllList from "./Divers/getMealsApi";
import getAllCocktail from "./Divers/GetCocktailApi";
import MealList from "./MealListCreator";
import CocktailList from "./CocktailListCreator";
import MobileButtonNav from "./MobileButtonNav";
import logo from "../Logoheaderlight.png";
import SpotifyApp from "./SpotifyApp";
import data from "../../data/data.json";

export default function Details() {
  const country = JSON.parse(localStorage.getItem("country"));
  const mealsApi = getAllList();
  const CocktailApi = getAllCocktail();
  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      className="Details Page"
      style={{
        background: "linear-gradient(to right, #FFF5EC 80%, #D9C46B 20%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img src={logo} alt="Party Place Logo" width="80%" />
        </Link>
      </div>
      <Typography
        variant="h5"
        position="absolute"
        top="1rem"
        left="1rem"
        sx={{ color: "grey.0" }}
        style={{
          textAlign: "right",
          marginRight: "1rem",
        }}
        id="username"
      >
        {userName}
      </Typography>
      <Typography
        variant="h3"
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
          margin: "1rem 1rem 1rem 1rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
        sx={{
          display: "flex",
          bgcolor: "primary.main",
          borderRadius: "10px",
          width: "78%",
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
        mealApiItems={mealsApi}
        country={data[country].gentillet}
      />
      <CocktailList
        sx={{ margin: "1rem" }}
        id="cocktail"
        cocktailApiItems={CocktailApi}
        Alcool1={data[country].alcool1}
        Alcool2={data[country].alcool2}
      />
      <SpotifyApp sx={{ margin: "1rem" }} country={country} />
      <MobileButtonNav element1={MealList} />
    </div>
  );
}
