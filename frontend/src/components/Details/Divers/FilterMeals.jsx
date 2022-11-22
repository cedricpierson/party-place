import React from "react";
import axios from "axios";

export default function getCategory() {
  const [category, setcategory] = React.useState();
  React.useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => setcategory(response.data.categories));
  }, []);
  return category;
}
