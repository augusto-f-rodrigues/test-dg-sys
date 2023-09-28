/* 
4 - Criei um código javascript que preencha um array com 100 números aleatórios e ao final, aplique um filtro fazendo com que o array fique apenas com as posições ímpares do array.
*/

export const mainTest4 = () => {
  const array = [];

  while (array.length < 100) {
    array.push((Math.random() * 100).toFixed());
  }
  console.log("\n################## TESTE 4 ##################\n");

  console.log('\nArray original: \n');
  console.log(array);

  const arrayOddPositions = array.filter((_, index) => index % 2 != 0);

  console.log('\nArray somente com os index ímpares: \n');
  console.log(arrayOddPositions);
};
