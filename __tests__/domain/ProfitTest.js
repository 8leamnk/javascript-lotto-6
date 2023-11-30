import Profit from '../../src/domain/Profit';

describe('수익 클래스 테스트', () => {
  test('구매 금액과 당첨 내역을 가지고 수익률을 계산한다.', () => {
    // given
    const DETAILS = new Map([
      ['3개 일치 (5,000원)', 0],
      ['4개 일치 (50,000원)', 1],
      ['5개 일치 (1,500,000원)', 2],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 1],
      ['6개 일치 (2,000,000,000원)', 1],
    ]);
    const PRICE = 7000;
    const OUTPUT = '29,043,571.4';

    // when
    const rate = new Profit(DETAILS).calculateRate(PRICE);

    // then
    expect(rate).toBe(OUTPUT);
  });
});
