/* 
5 - Crie um código javascript que faça simulação de um financiamento, que todo mês acrescenta um percentual na dívida pendente de pagamento. O valor total do financiamento, valor que será pago mensalmente e percentual será passado pelo usuário. Em quantos meses irá quitar a dívida dela e qual será o valor total pago? 
Exemplo: A pessoa pegou R$ 20.000,00 emprestado e irá pagar R$ 1.000,00 por mês a uma taxa de 2% ao mês.

Mês 1: R$ 20.000 + 2% = R$ 20.400,00 - R$ 1.000 = R$ 19.400
Mês 2: R$ 19.400 + 2% = R$ 19.788,00 - R$ 1.000 = R$ 18.788
Mês 3: R$ 18.788 + 2% = R$ 19.163,76 - R$ 1.000 = R$ 18.163
*/

const financing = (totalValue, monthlyValue, percentage) => {
  console.log("\n################## TESTE 5 ##################\n");
  let total = totalValue;
  let response = { qtyOfMonths: 0, value: 0 };

  while (total > 0) {
    const priceWithTax = total * (percentage / 100 + 1);
    const newTotal = priceWithTax - monthlyValue;

    if (newTotal >= total) {
      return { error: `Não será viável, o cliente nunca conseguirá pagar` };
    }

    if (newTotal > 0) {
      response.qtyOfMonths += 1;
      response.value += monthlyValue;
      console.log(
        `Mês ${response.qtyOfMonths}: R$ ${total} + ${percentage}% = R$ ${priceWithTax} - R$ ${monthlyValue} = R$ ${newTotal}`
      );
      total = newTotal;
    } else {
      response.qtyOfMonths += 1;
      response.value += priceWithTax;
      console.log(
        `Mês ${
          response.qtyOfMonths
        }: R$ ${total} + ${percentage}% = R$ ${priceWithTax} - R$ ${priceWithTax} = R$ ${0}`
      );
      total = 0;
    }
  }

  return response;
};

export const mainTest5 = () => {
  const result = financing(20000, 1000, 2);

  result?.error
    ? console.log(result.error)
    : console.log(
        `\nR: Quitará a dívida em ${
          result.qtyOfMonths
        } meses pagando no total R$ ${result.value.toFixed()}`
      );
};
