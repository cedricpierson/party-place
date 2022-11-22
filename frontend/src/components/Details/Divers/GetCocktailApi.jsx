import axios from "axios";
import { useEffect, useState } from "react";

async function getCocktailList(letter) {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const list = response.data.drinks;
  return list;
}
async function allListFusion() {
  const tabLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "y",
    "z",
  ];
  let AllList = [];
  for await (const letter of tabLetter) {
    const listProv = await getCocktailList(letter);
    AllList = AllList.concat(listProv);
  }
  return AllList;
}
export default function getAllCocktail() {
  const [list, setList] = useState();
  useEffect(() => {
    allListFusion().then((response) => {
      setList(response);
    });
  }, []);
  return list;
}
