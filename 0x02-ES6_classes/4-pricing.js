import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  
  get amount() {
    return this._amount;
  }

  set amount(Amount) {
    this._amount = Amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(Currency) {
    this._currency = Currency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
