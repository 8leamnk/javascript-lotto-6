import Profit from '../../src/domain/Profit.js';

describe('수익률 계산 테스트', () => {
  test('당첨 내역과 구입 금액을 가지고 수익률을 계산한다.', () => {
    // given
    const DETAILS = new Map([
      ['3개 일치 (5,000원)', 1],
      ['4개 일치 (50,000원)', 0],
      ['5개 일치 (1,500,000원)', 0],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 1],
      ['6개 일치 (2,000,000,000원)', 1],
    ]);
    const PRICE = 5000;
    const OUTPUT = 40600100;

    // when
    const rate = new Profit(DETAILS).calculateRate(PRICE);

    // then
    expect(rate).toBe(OUTPUT);
  });
});
