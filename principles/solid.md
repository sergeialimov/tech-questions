Single-Responsibility Principle

class should have only one job.
benefits
Easier to implement, test, read, less bugs, side effects


Open-Closed Principle
Objects or entities should be open for extension but closed for modification.

Use and export interfaces in a way that lets you depend on them instead of concretions.
This exposes an api that is closed to modification and can be extended upon.
Using an interface to define the interaction of api as a abstract construct leads to low coupling.


Liskov Substitution
“For b subtype of a, a may be replaced by type b”

Наследник класса дополняет, но не заменяет поведение базового класса. То есть в любом месте программы замена базового класса на класс-наследник не должна вызывать проблем. Если по каким-то причинам так не получается, то вероятнее всего имеет место либо некорректная реализация, либо неверно выбранная абстракция для наследования.

Соблюдение принципа подстановки Барбары Лисков позволяет гарантировать, что любой созданный нами подкласс будет без проблем использоваться ранее реализованными модулями, которые работали с надклассом. А это существенно упрощает расширение функциональных возможностей системы.

This means that every subclass or derived class should be substitutable for their base or parent class.


Interface Segregation
“Make small client specific interfaces”

Functions and classes that use these honed down interfaces leads a narrow purposeful scope of methods it can access.
If in the future the if the underlying concrete type or implementation changes or is refactored the clients using its interface are unaffected.
No need to mock a whole object when testing functions or classes that depend on the interface.
Lightweight and easy to construct mocks.



Dependency inversion principle states:
Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

This principle allows for decoupling.