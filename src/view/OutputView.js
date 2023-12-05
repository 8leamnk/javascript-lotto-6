import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printNumber(number) {
    Console.print(`\n${number}${MESSAGE.output.number}`);
  },

  printIssuedLotto(lotto) {
    lotto.forEach((numbers) => {
      Console.print(`[${numbers.join(', ')}]`);
    });
  },

  printDetails(details) {
    Console.print(MESSAGE.output.details);

    details.forEach((number, detailsKey) => {
      Console.print(`${detailsKey} - ${number}${VALUE.unit.number}`);
    });
  },

  printRate(rate) {
    const currencyValue = rate.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    Console.print(
      `${MESSAGE.output.rate} ${currencyValue}${VALUE.unit.percent}${MESSAGE.output.end}`,
    );
  },
};

export default OutputView;
