/**
 * Many applications will have a need for multiple,
 * similar objects that have some differences or specialization to them.
 * 
 * Inheritance prevents code duplication
 */


// base (parent) class

class BankAccount {
  get balance(): number {
    return this._balance;
  }
  private _balance: number;

  deposit(amount: number): number {
    return this._balance + amount;
  }

  withdraw(amount: number): number {
    if (amount < this._balance ){
      return this._balance - amount;
    }
    else {
      throw new Error("The withdraw amount must be less or equal than the balance.")
    }
  }
}


// derived (child) classes

class CheckingAccount extends BankAccount {
  protected monthlyFeeAmount: number = 5.00;
  chargeFee(): number {
    return this.monthlyFeeAmount;
  }
}

class SavingsAccount extends BankAccount {
  private _interestRate;
  public calculateInterest(){
    return this.balance * this._interestRate;
  }
}