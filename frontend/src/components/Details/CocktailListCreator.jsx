import React from "react";
import { PropTypes } from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import CocktailCard from "./caroussel/CocktailCard";

function CocktailList({ cocktailApiItems, listAlcool }) {
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
          overflowX: "scroll",
          alignItems: "center",
        }}
        direction="row"
        spacing={1}
      >
        {cocktailApiItems ? (
          cocktailApiItems
            .filter((item) => item.strIngredient1.includes(listAlcool))
            .map((item) => {
              return <CocktailCard cocktail={item} />;
            })
        ) : (
          <Typography variant="h3"> Cocktail in load</Typography>
        )}
      </Stack>
    </div>
  );
}
export default CocktailList;

CocktailList.propTypes = {
  cocktailApiItems: PropTypes.isRequired,
  listAlcool: PropTypes.isRequired,
};
