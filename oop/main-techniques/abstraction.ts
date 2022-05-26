/**
 * Abstraction is a way to model objects in a system that creates a separation of duties
 * between class or type and the code that inherits it.
 * It’s also a way to enforce a concept called contract based development
 */


interface Fee {
  chargeFee(amount: number );
}

// parent BankAccount and sibling SavingsAccount do not implement Fee interface
class BankAccount { ... }
class SavingsAccount extends BankAccount { ... }

// checking implements Fee
class CheckingAccount extends BankAccount implements Fee {
  chargeFee(amount: number) {}
}


// BusinessChecking inherits CheckingAccount and therefore Fee
class BusinessChecking extends CheckingAccount { … }

// Code that uses BusinessChecking can call chargeFee
function CalculateMonthlyStatements() {
  let businessChecking = new BusinessChecking();
  businessChecking.chargeFee(100);
}
