export default class Currency{
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(Code) {
    this._code = Code;
  }
  get name() {
    return this._name;
  }

  set name(Name) {
    this._name = Name;
  }
  
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
