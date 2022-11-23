import React, { useEffect } from "react";
import { Card, Typography } from "@mui/material/";
import { Link, useLocation } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import getAllList from "./Divers/getMealsApi";
import getAllCocktail from "./Divers/GetCocktailApi";
import MealList from "./MealListCreator";
import CocktailList from "./CocktailListCreator";
import MobileButtonNav from "./MobileButtonNav";
import logo from "../Logoheaderlight.png";
import SpotifyApp from "./SpotifyApp";
import data from "../../data/data.json";
import Footer from "../Footer";
import ToTopScroll from "../ToTopScroll";

export default function Details() {
  const country = JSON.parse(localStorage.getItem("country"));
  const mealsApi = getAllList();
  const CocktailApi = getAllCocktail();
  const userName = JSON.parse(localStorage.getItem("user"));
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="Details-Page" id="to-top" style={{
      background: "linear-gradient(to right, #FFF5EC 85%, #D9C46B 15%)",
    }}>
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
      <ToTopScroll />
      <Footer />
    </div>
  );
}
