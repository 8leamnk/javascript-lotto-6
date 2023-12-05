const MESSAGE = {
  input: {
    purchase: '구입금액을 입력해 주세요.\n',
    winnings: '\n당첨 번호를 입력해 주세요.\n',
    bonus: '\n보너스 번호를 입력해 주세요.\n',
  },

  output: {
    number: '개를 구매했습니다.',
    details: '\n당첨 통계\n---',
    rate: '총 수익률은',
    end: '입니다.',
  },

  error: {
    notNumber: '[ERROR] 숫자만 입력해 주세요.',
    notPurchaseUnit: '[ERROR] 1,000원 단위의 숫자를 입력해 주세요.',
    length: '[ERROR] 로또 번호는 6개여야 합니다.',
    duplication: '[ERROR] 중복된 숫자가 있습니다.',
    range: '[ERROR] 1부터 45까지의 숫자여야 합니다.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.output);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
