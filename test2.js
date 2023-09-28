/* 
2 - Crie um código javascript que recebe como entrada um valor string e filtra o JSON da questão anterior pela cidade.
*/

import { csvToJson } from "./test1.js";

export const filterByCity = async (city) => {
  const jsonData = await csvToJson("./archiveTest1.csv");
  const filteredArray = jsonData.filter((el) => el.cidade == city);
  return filteredArray;
};

(async () => {
  const response = await filterByCity("Indaial");
  console.log("\n################## TESTE 2 ##################\n");
  console.log("\nArray filtrado por cidade: \n");
  console.log(response);
})();
