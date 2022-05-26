class BankAccount {

  public minimumBalance: number;

  get balance(): number {
    return this._balance;
  }
  private _balance: number;

  deposit(amount: number): number {
    this._balance = this._balance + amount;
    return this._balance;
  }

  withdraw(amount: number): number {
    if (amount <= this.minimumBalance) {
      this._balance = this._balance - amount;
      return this._balance;
    }
  }
}