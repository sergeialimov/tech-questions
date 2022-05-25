/**
 * Both approaches allow the same things to be done.
 * But they are two different ways of solving a problem.
 */

/**
 * - Abstract class cannot be instantiated. 
 * error TS2511: Cannot create an instance of an abstract class.
 * - Only used as parent class
 * - An abstract class may implement one or more interfaces
 * - Can contain real implementation of some methods
 * - The implemented code can refer to other methods that don't exists yet
 * (you have to provide names and types for the unimplemented methods)
 * Abstract class complile to JavaScript functions. (Exist on compile)
 */


interface Name {
   firstName: string
   lastName: string;
}

interface Work {
    doWork(): void;
}

abstract class BaseEmployee implements Name, Work {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  abstract doWork(): void;

  notAbstractMehtod(): void {
    console.log(`Hey, I'm not abstract!`);
    this.doWork();
  };
}

class Employee extends BaseEmployee {
  doWork() {
    console.log(`I'm abstract!`)
  };
};

const baseEmployee = new Employee('Test', 'Abstract Class')

console.log(`${baseEmployee.firstName} ${baseEmployee.lastName}`);

// baseEmployee.doWork();
baseEmployee.notAbstractMehtod();