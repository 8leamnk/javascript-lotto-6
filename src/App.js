import Purchase from './domain/Purchase.js';
import Lotto from './domain/Lotto.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Util from './util/Util.js';

class App {
  async play() {
    const { price, numberOfPurchase } = await this.#executePurchase();
    const lotto = await this.#executeLotto();
    const bonus = await this.#executeBonus();
  }

  async #executePurchase() {
    try {
      const answer = await InputView.readPurchase();
      const purchaseInfo = new Purchase(answer);

      return purchaseInfo.getPurchaseInfo();
    } catch (error) {
      OutputView.printError(error);
      return this.#executePurchase();
    }
  }

  async #executeLotto() {
    try {
      const answer = await InputView.readLotto();
      const numbers = Util.convertToArray(answer);
      const lotto = new Lotto(numbers).getLotto();

      return lotto;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeLotto();
    }
  }

  async #executeBonus() {
    try {
      const answer = await InputView.readBonus();

      return answer;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeBonus();
    }
  }
}

export default App;
