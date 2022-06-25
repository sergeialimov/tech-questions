Factory method

It defines an interface for creating a single object and lets child classes decide which class to instantiate.

According to Wikipedia:

In class-based programming, the factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method — either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes — rather than by calling a constructor.

Example
Let’s take an example of a point. We have a class of points and we have to create a Cartesian point and a Polar point. We will define a Point factory that will do this work