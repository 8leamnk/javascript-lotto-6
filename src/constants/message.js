const MESSAGE = {
  input: {
    purchase: '구입금액을 입력해 주세요.\n',
    winnings: '당첨 번호를 입력해 주세요.\n',
    bonus: '보너스 번호를 입력해 주세요.\n',
  },

  error: {
    notNumber: '[ERROR] 숫자만 입력해 주세요.\n',
    notPurchaseUnit: '[ERROR] 1,000원 단위의 숫자를 입력해 주세요.\n',
    length: '[ERROR] 로또 번호는 6개여야 합니다.\n',
    duplication: '[ERROR] 중복된 숫자가 있습니다.\n',
    range: '[ERROR] 1부터 45까지의 숫자여야 합니다.\n',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
