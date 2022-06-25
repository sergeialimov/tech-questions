Flyweight
It reduces the memory cost of creating similar objects.

According to Wikipedia

A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects.

Example
Let’s take the example of a user. Let’s have multiple users with the same name. We can save our memory by storing a name and give it a reference to the users having the same names.


That’s how we will use this.
Now we will make memory comparsion without Flyweight and with Flyweight, by making 10k users.