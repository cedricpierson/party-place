import React from "react";
import { PropTypes } from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CocktailCard from "./caroussel/CocktailCard";

function CocktailList({ cocktailApiItems, listAlcool }) {
  return (
    <div
      className="Cocktails"
      style={{
        height: "75vh",
        paddingLeft: "1rem",
        backgroundColor: "#FDF0CA",
      }}
    >
      <Typography variant="h4">Cocktail à savourer</Typography>
      <Stack
        style={{
          height: "65vh",
          overflowX: "scroll",
          alignItems: "center",
        }}
        direction="row"
        spacing={1}
      >
        {cocktailApiItems
          .filter((item) => item.strArea.includes(listAlcool))
          .map((item) => {
            // eslint-disable-next-line react/jsx-props-no-spreading
            return <CocktailCard {...item} />;
          })}
      </Stack>
    </div>
  );
}
export default CocktailList;

CocktailList.propTypes = {
  cocktailApiItems: PropTypes.isRequired,
  item: PropTypes.isRequired,
  listAlcool: PropTypes.isRequired,
};
