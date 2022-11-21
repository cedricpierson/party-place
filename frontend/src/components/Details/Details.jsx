import React, { useState, useEffect } from "react";
import { Card, Typography } from "@mui/material/";
import { Link, useLocation } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import allListbyLetter from "./Divers/getMealsApi";
import drinks from "./Divers/ApiSim2";
import MealList from "./MealListCreator";
import CocktailList from "./CocktailListCreator";
import MobileButtonNav from "./MobileButtonNav";
import logo from "./partyplace.png";
import SpotifyApp from "./SpotifyApp";
import data from "../../data/data.json";
import Footer from "../Footer";
import ToTopScroll from "../ToTopScroll";

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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Details-Page" id="to-top" sx={{ bgcolor: "primary.light" }}>
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
      <ToTopScroll />
      <Footer />
    </div>
  );
}
