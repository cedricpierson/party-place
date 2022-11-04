import React from "react";
import ThemeProvider from "./theme";
import meals from "./components/Details/ApiSim";
import MealList from "./components/Details/MealListCreator";

function App() {
  return (
    <ThemeProvider>
      <MealList mealApiItems={meals} country="British" />
    </ThemeProvider>
  );
}

export default App;
