https://developer.mozilla.org/en-US/docs/Glossary/Safe/HTTP

An HTTP method is safe if it doesn't alter the state of the server.
In other words, a method is safe if it leads to a read-only operation.

Several common HTTP methods are safe: GET, HEAD, or OPTIONS.

All safe methods are also idempotent, but not all idempotent methods are safe.
For example, PUT and DELETE are both idempotent but unsafe.