Open-Closed Principle
Objects or entities should be open for extension but closed for modification.


You have your abstractions such as classes, modules, higher order functions that do one thing and do it well.

On the other hand, you have changing requirements, scope changes, new feature requests and business needs.
You cannot keep your precious abstractions in a pristine form for a long time. 

- Keep the current functions, Classes, modules as they are or at least close to what they used to be — aka immutable.
- Extend, in a composable (avoid inheritance) way the existing Classes, functions or modules so that they expose the new feature or functionality possibly in a different name.