/* Código para execução de todos os testes */

import { csvToJson } from "./test1.js";
import { filterByCity } from "./test2.js";
import { filterByColAndOrder } from "./test3.js";
import { mainTest4 } from "./test4.js";
import { mainTest5 } from "./test5.js";

const main = async () => {
  const resultTeste1 = await csvToJson("./archiveTest1.csv");
  
  const responseTeste2 = await filterByCity("Indaial");

  const responseTest3 = await filterByColAndOrder("idade", "ASC");

  mainTest4();

  mainTest5();
};

main();
