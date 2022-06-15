boolean

number
bigint

string
char

null
undefined


Object





The Boolean object is an object wrapper for a boolean value.

Number is a primitive wrapper object used to represent and manipulate numbers
Number('123')  // returns the number 123
Number('123') === 123  // true
Number("unicorn")  // NaN
Number(undefined)  // NaN


The String object is used to represent and manipulate a sequence of characters.
const string4 = new String("A String object");

let s_prim = 'foo'
let s_obj = new String(s_prim)
console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"