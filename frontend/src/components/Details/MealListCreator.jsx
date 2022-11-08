import React from "react";
import { PropTypes } from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import MealCard from "./caroussel/MealsCard";

export default function MealList({ mealApiItems, country }) {
  return (
    <div
      id="mealList"
      className="Recettes"
      style={{
        height: "55vh",
        paddingLeft: "1rem",
        backgroundColor: "inherit",
      }}
    >
      <Typography
        variant="h3"
        style={{ display: "flex", alignItems: "center" }}
      >
        <LocalDiningIcon fontSize="Large" />
        Recette à déguster
      </Typography>
      <Stack
        style={{
          height: "45vh",
          maxHeight: "65vh",
          overflowX: "scroll",
          alignItems: "center",
        }}
        direction="row"
        spacing={1}
      >
        {mealApiItems
          .filter((item) => item.strArea.includes(country))
          .map((item) => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <MealCard {...item} />;
          })}
      </Stack>
    </div>
  );
}

MealList.propTypes = {
  mealApiItems: PropTypes.isRequired,
  item: PropTypes.isRequired,
  country: PropTypes.isRequired,
};
