import React, { useState, useEffect } from "react";
import { Card, Typography } from "@mui/material/";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import allListbyLetter from "./Divers/getMealsApi";
import drinks from "./Divers/ApiSim2";
import MealList from "./MealListCreator";
import CocktailList from "./CocktailListCreator";
import MobileButtonNav from "./MobileButtonNav";
import logo from "./partyplace.png";
import SpotifyApp from "./SpotifyApp";
import data from "../../data/data.json";

function getAllList() {
  const [list, setList] = useState();
  useEffect(() => {
    allListbyLetter().then((response) => {
      setList(response);
    });
  }, []);
  return list;
}

export default function Details() {
  const country = JSON.parse(localStorage.getItem("country"));
  const mealsApi = getAllList();
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
        mealApiItems={mealsApi}
        country={data[country].gentillet}
      />
      <CocktailList
        sx={{ margin: "1rem" }}
        id="cocktail"
        cocktailApiItems={drinks}
        listAlcool={data[country].alcool1}
      />
      <SpotifyApp sx={{ margin: "1rem" }} country={country} />
      <MobileButtonNav element1={MealList} />
    </div>
  );
}
