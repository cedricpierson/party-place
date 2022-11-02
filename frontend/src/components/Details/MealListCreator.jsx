import React from "react";
import { PropTypes } from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MealCard from "./caroussel/MealsCard";

export default function MealList({ mealApiItems }) {
  const [britishOnly, setBritishOnly] = React.useState(false);
  const handleBritishClick = () => {
    setBritishOnly(!britishOnly);
  };

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
      <Button
        variant="contained"
        color="inherit"
        size="small"
        onClick={handleBritishClick}
      >
        Great Britain !
      </Button>
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
        {mealApiItems
          .filter((item) => !britishOnly || item.strArea.includes("British"))
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
};
