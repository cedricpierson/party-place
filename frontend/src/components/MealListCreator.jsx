import React from "react";
import { PropTypes } from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MealCard from "./MealsCard";

export default function MealList({ mealApiItems }) {
  return (
    <div
      className="Recettes"
      style={{
        height: "75vh",
        paddingLeft: "1rem",
        backgroundColor: "#FDF0CA",
      }}
    >
      <Typography variant="h4">Recette à déguster</Typography>
      <Stack
        style={{
          height: "65vh",
          maxHeight: "65vh",
          overflowX: "scroll",
          alignItems: "center",
        }}
        direction="row"
        spacing={1}
      >
        {mealApiItems.map((item) => {
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
};
