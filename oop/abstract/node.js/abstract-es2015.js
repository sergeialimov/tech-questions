/**
 @constructor
 @abstract
 */
 var Animal = function() {
  if (this.constructor === Animal) {
    throw new Error("Can't instantiate abstract class!");
  }
  // Animal initialization...
};

/**
@abstract
*/
Animal.prototype.say = function() {
  throw new Error("Abstract method!");
}


// The Animal "class" and the say method are abstract.

// Creating an instance would throw an error:

new Animal(); // throws



// This is how you "inherit" from it:

var Cat = function() {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function() {
    console.log('meow');
}