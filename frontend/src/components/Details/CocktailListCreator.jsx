import React from "react";
import { PropTypes } from "prop-types";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import CocktailCard from "./caroussel/CocktailCard";

function CocktailList({ cocktailApiItems, Alcool1, Alcool2 }) {
  return (
    <div
      id="cocktail"
      className="Cocktails"
      style={{
        backgroundColor: "inherit",
        marginTop: "2rem",
        paddingLeft: "1rem",
      }}
    >
      <Typography
        variant="h3"
        style={{ display: "flex", alignItems: "center" }}
        sx={{ color: "secondary.main" }}
      >
        <LocalBarIcon fontSize="Large" />
        Cocktail à savourer
      </Typography>
      <Stack
        style={{
          height: "55vw",
          marginTop: "1rem",
          maxHeight: "65vh",
          overflowX: "scroll",
          alignItems: "center",
        }}
        direction="row"
        spacing={1}
      >
        {cocktailApiItems ? (
          cocktailApiItems
            .filter(
              (item) =>
                item.strIngredient1.includes(Alcool1) ||
                item.strIngredient2.includes(Alcool1) ||
                item.strIngredient1.includes(Alcool2) ||
                item.strIngredient2.includes(Alcool2)
            )
            .map((item) => {
              return <CocktailCard cocktail={item} />;
            })
        ) : (
          <Skeleton
            sx={{ bgcolor: "primary.light" }}
            animation="pulse"
            variant="rounded"
            width="100vw"
            height="55vw"
          />
        )}
      </Stack>
    </div>
  );
}
export default CocktailList;

CocktailList.propTypes = {
  cocktailApiItems: PropTypes.isRequired,
  Alcool1: PropTypes.isRequired,
  Alcool2: PropTypes.isRequired,
};
