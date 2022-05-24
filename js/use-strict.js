/**
 * What does 'use strict' change?
 * Show some example
 */

/**
 * The "use strict" Directive
 * The "use strict" directive was new in ECMAScript version 5.
 * It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
 * The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 * With strict mode, you can not, for example, use undeclared variables.
 */


 "use strict";
 x = 3.14;       // This will cause an error because x is not declared


/**
 * Strict mode makes it easier to write "secure" JavaScript.
 * 
 * Strict mode changes previously accepted "bad syntax" into real errors.
 * 
 * As an example, in normal JavaScript, mistyping a variable name creates a new global variable.
 * 
 * In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
 * 
 * In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.
 * 
 * In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property,
 * a non-existing variable, or a non-existing object, will throw an error.
 */


 "use strict";
 function x(p1, p2) {};
 delete x;                // This will cause an error 


 "use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error


// The word arguments cannot be used as a variable:

"use strict";
let arguments = 3.14;    // This will cause an error