Open-Closed Principle
Objects or entities should be open for extension but closed for modification.

Use and export interfaces in a way that lets you depend on them instead of concretions.
This exposes an api that is closed to modification and can be extended upon.
Using an interface to define the interaction of api as a abstract construct leads to low coupling.


The simplest way to demonstrate this principle is to consider a method that does one thing.
Let's say it writes to a particular file, the name of which is hard-coded into the method. 

If the requirements change, and the filename now needs to be different in certain situations,
we must open up the method to change the filename. 

If, on the other hand, the filename had been passed in as a parameter, we would be able to modify
the behavior of this method without changing its source, keeping it closed to modification.

The Open-Closed Principle can also be achieved in many other ways, including through the use of inheritance or through compositional design patterns like the Strategy pattern.

https://codeburst.io/understanding-solid-principles-open-closed-principle-e2b588b6491f