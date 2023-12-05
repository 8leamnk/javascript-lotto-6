import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },
};

export default OutputView;
