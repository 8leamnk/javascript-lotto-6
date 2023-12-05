const VALUE = {
  range: {
    start: 1,
    end: 45,
    length: 6,
  },

  detailsInfo: new Map([
    ['3', ['3개 일치 (5,000원)', 5000]],
    ['4', ['4개 일치 (50,000원)', 50000]],
    ['5', ['5개 일치 (1,500,000원)', 1500000]],
    ['bonus', ['5개 일치, 보너스 볼 일치 (30,000,000원)', 30000000]],
    ['6', ['6개 일치 (2,000,000,000원)', 2000000000]],
  ]),

  unit: {
    number: '개',
    percent: '%',
  },
};

Object.freeze(VALUE);

export default VALUE;
