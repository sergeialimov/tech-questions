// When using dependency injection, objects are given their dependencies at run time rather
// than compile time (car manufacturing time).

public SomeClass() {
  myObject = Factory.getObject();
}

public SomeClass (MyClass myObject) {
  this.myObject = myObject;
}

// myObject can be passed directly which makes testing easier.