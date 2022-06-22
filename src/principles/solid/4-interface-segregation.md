Interface Segregation
“Make small client specific interfaces”

Functions and classes that use these honed down interfaces leads a narrow purposeful scope of methods it can access.
If in the future the if the underlying concrete type or implementation changes or is refactored the clients using its interface are unaffected.
No need to mock a whole object when testing functions or classes that depend on the interface.
Lightweight and easy to construct mocks.