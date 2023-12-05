import Purchase from './domain/Purchase.js';
import IssuedLotto from './domain/IssuedLotto.js';
import Lotto from './domain/Lotto.js';
import Bonus from './domain/Bonus.js';
import Compare from './domain/Compare.js';
import Profit from './domain/Profit.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Util from './util/Util.js';

class App {
  async play() {
    const { price, number } = await this.#executePurchase();
    const lotto = App.#executeIssuedLotto(number);
    const winnings = await this.#executeWinnings();
    const bonus = await this.#executeBonus(winnings);
    const details = App.#executeCompare(lotto, winnings, bonus);
    App.#executeRate(details, price);
  }

  async #executePurchase() {
    try {
      const answer = await InputView.readPurchase();
      const priceInfo = new Purchase(answer).getPriceInfo();

      OutputView.printNumber(priceInfo.number);

      return priceInfo;
    } catch (error) {
      OutputView.printError(error);
      return this.#executePurchase();
    }
  }

  static #executeIssuedLotto(number) {
    const lotto = new IssuedLotto(number).getIssuedLotto();

    OutputView.printIssuedLotto(lotto);

    return lotto;
  }

  async #executeWinnings() {
    try {
      const answer = await InputView.readWinnings();
      const numbers = Util.convertToNumberArray(answer);
      const winnings = new Lotto(numbers).getWinnings();

      return winnings;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeWinnings();
    }
  }

  async #executeBonus(winnings) {
    try {
      const answer = await InputView.readBonus();
      const bonus = new Bonus(answer, winnings).getBonus();

      return bonus;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeBonus(winnings);
    }
  }

  static #executeCompare(lotto, winnings, bonus) {
    const details = new Compare(lotto, winnings, bonus).getDetails();

    OutputView.printDetails(details);

    return details;
  }

  static #executeRate(details, price) {
    const rate = new Profit(details).calculateRate(price);

    OutputView.printRate(rate);
  }
}

export default App;
