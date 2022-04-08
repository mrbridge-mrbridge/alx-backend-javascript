import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(Amount) {
    if (typeof Amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = Amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(Cur) {
    if (!(Cur instanceof Currency)) {
      throw new TypeError('currency should be of type Currency');
    }
    this._currency = Cur;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
