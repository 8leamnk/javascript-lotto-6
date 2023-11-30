const VALUE = Object.freeze({
  details: new Map([
    ['3', ['3개 일치 (5,000원)', 5000]],
    ['4', ['4개 일치 (50,000원)', 50000]],
    ['5', ['5개 일치 (1,500,000원)', 1500000]],
    ['5-bonus', ['5개 일치, 보너스 볼 일치 (30,000,000원)', 30000000]],
    ['6', ['6개 일치 (2,000,000,000원)', 2000000000]],
  ]),

  standard: {
    winningStart: 3,
    bonus: 5,
  },

  unit: {
    bonus: '5-bonus',
  },
});

export default VALUE;
