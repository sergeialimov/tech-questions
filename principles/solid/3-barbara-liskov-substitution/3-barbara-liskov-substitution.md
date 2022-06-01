Liskov Substitution
“For b subtype of a, a may be replaced by type b”
Every subclass must be substitutable for their base types.


Наследник класса дополняет, но не заменяет поведение базового класса. То есть в любом месте программы замена базового класса на класс-наследник не должна вызывать проблем. Если по каким-то причинам так не получается, то вероятнее всего имеет место либо некорректная реализация, либо неверно выбранная абстракция для наследования.

Соблюдение принципа подстановки Барбары Лисков позволяет гарантировать, что любой созданный нами подкласс будет без проблем использоваться ранее реализованными модулями, которые работали с надклассом. А это существенно упрощает расширение функциональных возможностей системы.

This means that every subclass or derived class should be substitutable for their base or parent class.



A very common violation of this principle is the partial implementation of interfaces or base class functionality, leaving unimplemented methods or properties to throw an exception (e.g. NotImplementedException).


A common code smell that frequently indicates an LSP violation is the presence of type checking code within a code block that should be polymorphic. For instance, if you have a foreach loop over a collection of objects of type Foo, and within this loop there is a check to see if Foo is in fact Bar (subtype of Foo), then this is almost certainly an LSP violation. If instead you ensure Bar is in all ways substitutable for Foo, there should be no need to include such a check.