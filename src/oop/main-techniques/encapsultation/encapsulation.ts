/**
 * A key aspect of object-oriented programming, encapsulation enables you to perform data hiding.
 * It’s necessary to hide certain data so that it’s not changed accidentally or
 * purposefully by other components or code in the program.
 */

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