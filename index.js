/* Código para execução de todos os testes */

import { csvToJson } from "./test1.js";
import { filterByCity } from "./test2.js";
import { filterByColAndOrder } from "./test3.js";
import { mainTest4 } from "./test4.js";
import { mainTest5 } from "./test5.js";

const main = async () => {
  // console.log("### TESTE 1 ###");
  const resultTeste1 = await csvToJson("./archiveTest1.csv");

  // console.log("### TESTE 2 ###");
  const responseTeste2 = await filterByCity("Indaial");

  // console.log("### TESTE 3 ###");
  const responseTest3 = await filterByColAndOrder("idade", "ASC");

  // console.log("### TESTE 4 ###");
  mainTest4();

  // console.log("### TESTE 5 ###");
  mainTest5();
};

main();
