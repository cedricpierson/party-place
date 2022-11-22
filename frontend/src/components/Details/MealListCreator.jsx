import React from "react";
import { PropTypes } from "prop-types";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import Skeleton from "@mui/material/Skeleton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MealCard from "./caroussel/MealsCard";
import getCategory from "./Divers/FilterMeals";

export default function MealList({ mealApiItems, country }) {
  const listCategory = getCategory();
  const [filter, setFilter] = React.useState("");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div
      id="mealList"
      className="Recettes"
      style={{
        backgroundColor: "inherit",
        marginTop: "2rem",
        paddingLeft: "1rem",
      }}
    >
      <div className="enTete" style={{ display: "flex" }}>
        <Typography
          variant="h4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          sx={{ color: "secondary.main" }}
        >
          <LocalDiningIcon fontSize="Large" />
          Recette à déguster
        </Typography>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          variant="outlined"
        >
          <InputLabel id="filter-meals">Categories</InputLabel>
          <Select
            labelId="filter-meals"
            id="filter"
            value={filter}
            label="Categorie"
            onChange={handleChange}
            style={{ minHeight: "36px" }}
          >
            <MenuItem value="">Aucune</MenuItem>
            {listCategory &&
              listCategory.map((element) => {
                return (
                  <MenuItem value={element.strCategory}>
                    {element.strCategory}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
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
        {mealApiItems ? (
          mealApiItems
            .filter((item) => item.strArea.includes(country))
            .filter((item) => item.strCategory.includes(filter))
            .map((item) => {
              return <MealCard recette={item} />;
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

MealList.propTypes = {
  mealApiItems: PropTypes.isRequired,
  country: PropTypes.isRequired,
};
