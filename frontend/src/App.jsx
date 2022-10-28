import React from "react";
import ThemeProvider from "./theme";
import "./App.css";
import MealList from "./components/MealListCreator";
import CocktailList from "./components/CocktailListCreator";
import drinks from "./components/ApiSim2";
import meals from "./components/ApiSim";

function App() {
  return (
    <ThemeProvider>
      <MealList mealApiItems={meals} />
      <CocktailList cocktailApiItems={drinks} />
    </ThemeProvider>
  );
}

export default App;
