/* 
1 - Crie um código javascript que lê um arquivo CSV com os dados abaixo e converta o conteúdo em JSON.
Conteúdo do arquivo CSV:
nome;idade;cidade
Isadora;39;Indaial
Ana;28;Blumenau
Gabriela;18;Indaial
Joaquim;22;Brusque
 */
import fs from "fs";
import csv from "fast-csv";

export const csvToJson = async (path) => {
  const data = [];

  try {
    await new Promise((resolve, reject) => {
      fs.createReadStream(path)
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => {
          console.error(error);
          reject(error);
        })
        .on("data", (row) => data.push(row))
        .on("end", () => {
          resolve(data);
        });
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }

  return data;
};

(async () => {
  const result = await csvToJson("./archiveTest1.csv");
  console.log("\n################## TESTE 1 ##################\n");
  console.log("\nCsv convertido para JSON: \n");
  console.log(result);
})();
