import VALUE from './value.js';

const MESSAGE = {
  input: {
    purchase: '구입금액을 입력해 주세요.\n',
    lotto: '당첨 번호를 입력해 주세요.\n',
    bonus: '보너스 번호를 입력해 주세요.\n',
  },

  output: {
    price: `${VALUE.unit.number}를 구매했습니다.`,
    details: '\n당첨 통계\n---',
    totalRate: '총 수익률은',
    ending: '입니다.',
  },

  error: {
    notNumber: '[ERROR] 숫자를 입력해 주세요.\n',
    price: '[ERROR] 1,000원 단위의 금액을 입력해 주세요.\n',
    lottoLength: `[ERROR] 로또 번호는 ${VALUE.standard.lotto}개여야 합니다.\n`,
    range: `[ERROR] ${VALUE.standard.start}부터 ${VALUE.standard.end}까지의 숫자를 입력해 주세요.\n`,
    duplication: '[ERROR] 중복된 숫자가 있습니다.\n',
    bonus: '[ERROR] 당첨 번호에 없는 숫자를 입력해 주세요.\n',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.output);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
