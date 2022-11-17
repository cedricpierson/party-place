import axios from "axios";

async function getList(letter) {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  const list = response.data.meals;
  return list;
}
export default async function allList() {
  const listA = await getList("a");
  const listB = await getList("b");
  const listC = await getList("c");
  const listD = await getList("d");
  const listE = await getList("e");
  const listF = await getList("f");
  const listG = await getList("g");
  const listH = await getList("h");
  const listI = await getList("i");
  const listJ = await getList("j");
  const listK = await getList("k");
  const listL = await getList("l");
  const listM = await getList("m");
  const listN = await getList("n");
  const listO = await getList("o");
  const listP = await getList("p");
  const listR = await getList("r");
  const listS = await getList("s");
  const listT = await getList("t");
  const listV = await getList("v");
  const listW = await getList("w");
  const listY = await getList("y");

  const listComplet = listA.concat(
    listB,
    listC,
    listD,
    listE,
    listF,
    listG,
    listH,
    listI,
    listJ,
    listK,
    listL,
    listM,
    listN,
    listO,
    listP,
    listR,
    listS,
    listT,
    listV,
    listW,
    listY
  );
  return listComplet;
}
