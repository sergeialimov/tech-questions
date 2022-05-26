/**
 * When multiple classes inherit from a parent and override the same functionality,
 * the result is polymorphism
 */

class CheckingAccount {
  open(initialAmount: number) {
    // code to open account and save in database
  }
}

class BusinessCheckingAccount extends CheckingAccount {
  open(initialAmount: number) {
    if (initialAmount < 1000) {
      throw new Error("Business accounts must have an initial deposit of 1.000 Euros")
    }
    super.open(initialAmount);
  }
}

class PersonalCheckingAccount extends CheckingAccount {
  open(initialAmount: number) {
    if (initialAmount <= 0) {
      throw new Error("Personal accounts must have an initial deposit of more than zero Euros")
    }
    super.open(initialAmount);
  }
}

const personalCheckingAccount = new PersonalCheckingAccount();
const businessCheckingAccount = new BusinessCheckingAccount();

// personalCheckingAccount.open(0); // Error: Personal accounts must have an initial deposit of more than zero Euros
businessCheckingAccount.open(0); // Error: Business accounts must have an initial deposit of 1.000 Euros