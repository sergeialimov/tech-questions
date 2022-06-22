/**
 * Abstract classes
 * 
 * A class is both a contract and the implementation of the factory.
 * An abstract class is also implementation but incomplete.
 * An abstract class exists at runtime, even if it has only abstract methods
 * 
 */


abstract class HouseRestorer {
  protected abstract layWires();
  protected abstract layPipes();

  restoreHouse() {
    this.layWires();
    this.layPipes();
  }
}

/**
 * This abstract class HouseRestorer defines HOW the methods layWires and layPipes will be used
 * but it's up to child class to implement the specialized treatments before it can be used
 */

new HouseRestorer(); // Cannot create an instance of an abstract class.