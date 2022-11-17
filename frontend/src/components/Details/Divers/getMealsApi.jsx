import axios from "axios";

async function getList(letter) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const list = response.data.meals;
  return list;
}
export default async function allListbyLetter() {
  const tabLetter = ["a", "b", "c", "d", "e", "f"];
  let AllList = [];
  for await (const letter of tabLetter) {
    const listProv = await getList(letter);
    AllList = AllList.concat(listProv);
  }
  return AllList;
}
