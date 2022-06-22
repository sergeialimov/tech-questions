/**
 * Abstract class Animal
 * @abstract
 */

class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw new Error('Abstract class cannot be instantiated');
    }
  }
  say() {
    throw new Error('Method say() must be implemented');
  }

  eat() {
    console.log('eating');
  }
}

/**
 * Dog
 * @class Dog
 * @extends {Animal}
 */
class Dog extends Animal {
  say() {
    console.log('bark');
  }
}

class Horse extends Animal {

}

const dog = new Dog();
const horse = new Horse();

dog.eat();
dog.say();

horse.eat();
// horse.say(); // Error: Method say() must be implemented

new Animal();  // Error: Abstract class cannot be instantiated