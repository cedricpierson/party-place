import axios from "axios";
import { useEffect, useState } from "react";

async function getList(letter) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const list = response.data.meals;
  return list;
}
async function allListbyLetter() {
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
    "r",
    "s",
    "t",
    "v",
    "w",
    "y",
  ];
  let AllList = [];
  for await (const letter of tabLetter) {
    const listProv = await getList(letter);
    AllList = AllList.concat(listProv);
  }
  return AllList;
}
export default function getAllList() {
  const [list, setList] = useState();
  useEffect(() => {
    allListbyLetter().then((response) => {
      setList(response);
    });
  }, []);
  return list;
}
