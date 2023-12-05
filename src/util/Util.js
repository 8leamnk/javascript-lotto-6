import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const Util = {
  validateNumber(answer) {
    const NOT_NUMBER = /[^0-9]/;

    if (NOT_NUMBER.test(answer)) {
      throw new Error(MESSAGE.error.notNumber);
    }
  },

  validateRange(number) {
    const { start, end } = VALUE.range;

    if (number < start || number > end) {
      throw new Error(MESSAGE.error.range);
    }
  },

  convertToNumberArray(answer) {
    return answer.split(',').map((string) => Number(string));
  },
};

export default Util;
