import Lotto from './domain/Lotto.js';
import Purchase from './domain/Purchase.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Util from './util/Util.js';

class App {
  async play() {
    const { price, number } = await this.#executePurchase();
    const winnings = await this.#executeWinnings();
  }

  async #executePurchase() {
    try {
      const answer = await InputView.readPurchase();
      const priceInfo = new Purchase(answer).getPriceInfo();

      return priceInfo;
    } catch (error) {
      OutputView.printError(error);
      return this.#executePurchase();
    }
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

  async #executeBonus() {
    try {
      const answer = await InputView.readBonus();

      return '';
    } catch (error) {
      OutputView.printError(error);
      return this.#executeBonus();
    }
  }
}

export default App;
