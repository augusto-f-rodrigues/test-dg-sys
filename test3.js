/* 
3 - Crie um código javascript que recebe como entrada a coluna que o usuário quer ordenar e o sentido desejado (ASC ou DESC).
*/

import { csvToJson } from "./test1.js";

export const filterByColAndOrder = async (col, order) => {
  const jsonData = await csvToJson("./archiveTest1.csv");

  const ordenedArray = jsonData;

  ordenedArray.sort((a, b) => {
    switch (order) {
      case "ASC":
        if (a[col] < b[col]) {
          return -1;
        }
        break;

      case "DESC":
        if (a[col] > b[col]) {
          return -1;
        }
        break;

      default:
        return 0;
    }
  });

  return ordenedArray;
};

(async () => {
  const response = await filterByColAndOrder("idade", "ASC");
  console.log("\n################## TESTE 3 ##################\n");
  console.log("\nArray ordenado: \n");
  console.log(response);
})();
