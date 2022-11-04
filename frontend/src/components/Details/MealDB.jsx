import React from "react";
import axios from "axios";

export default function MealApi() {
  const baseUrl = "www.themealdb.com/api/json/v1/1/search.php?f=a";

  const [meals, setMeals] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setMeals(response.data);
    });
  }, []);
  return meals;
}
