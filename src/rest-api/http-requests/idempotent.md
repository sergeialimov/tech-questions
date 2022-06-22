https://developer.mozilla.org/en-US/docs/Glossary/Idempotent

Idempotent
An HTTP method is idempotent if an identical request can be made once or several times
in a row with the same effect while leaving the server in the same state.
In other words, an idempotent method should not have any side-effects (except for keeping statistics).

Implemented correctly, the GET, HEAD, PUT, and DELETE methods are idempotent, but not the POST method.

All safe methods are also idempotent


Another implication of DELETE being idempotent is that developers should not implement RESTful APIs
with a delete last entry functionality using the DELETE method.