📘 JavaScript Advanced Concepts – Complete Notes (Functions, Arrays, Objects, JSON, Closures & More)

This repository contains my full practice and learning notes for Advanced JavaScript.
All the concepts I learned while coding (functions, advanced array methods, objects, closures, JSON, optional chaining, etc.) are explained in this README.

⭐ Topics Covered

Functions (Declaration, Expression, Arrow Functions)

Parameters vs Arguments

Default Parameters

Rest Parameters

Return Values

First-Class Functions

Higher-Order Functions (HOF)

Pure & Impure Functions

Closures

Lexical Scope

Array Methods (push, pop, shift, unshift, splice, slice)

Array HOFs (map, filter, reduce, forEach)

Spread Operator

Objects & Object Methods

Looping Through Objects

Computed Properties

JSON (stringify & parse)

Deep Cloning

Optional Chaining

🔥 1. Functions (Basic to Advance)
✔ Function Declaration

A named function defined using the function keyword.

✔ Function Expression

A function stored in a variable.

✔ Arrow Function ( => )

Shorter syntax, commonly used in modern JS.

✔ Parameters vs Arguments

Parameters → Values listed in function definition

Arguments → Actual values passed during function call

✔ Default Parameters

Used to give fallback values to parameters if nothing is passed.

✔ Rest Parameters

Used when we want to accept unlimited arguments inside a function.

✔ Return Keyword

Used to send value back from a function.

✔ First-Class Functions

In JavaScript, functions are treated as values — they can be stored in variables, passed as arguments, or returned from other functions.

✔ Higher-Order Functions

A function that accepts another function or returns another function.

🧼 2. Pure vs Impure Functions
✔ Pure Function

Does NOT modify external values

Always returns same output for same input

✔ Impure Function

Modifies external state

Output can change because of outside variables

🔒 3. Closures

A closure is created when a function remembers variables from its parent function even after the parent function has returned.

Useful for:

Data privacy

Creating function factories

Maintaining state

🧭 4. Lexical Scoping

Inner functions have access to the variables of outer functions based on where they are written in code.

📚 5. Arrays & Array Methods
✔ Basic Methods

push() — add at end

pop() — remove last

shift() — remove first

unshift() — add at first

splice() — remove/replace from any index

slice() — returns a new array

✔ Reverse & Sort

reverse() — reverse array

sort() — custom sorting using compare function

⚙️ 6. Array Higher-Order Methods
✔ forEach()

Runs a function on each element (does NOT return new array).

✔ map()

Creates a new array based on modified values of the previous array.

✔ filter()

Filters array values based on a given condition.

✔ reduce()

Reduces all array values to a single result (sum, average, etc.).

🔄 7. Spread Operator

Used to copy arrays or merge them without affecting the original.

🧱 8. Objects
✔ Object Properties

Key-value pairs that store data.

✔ Looping Through Objects

Using for...in loop.

✔ Computed Properties

Using variables as property names dynamically.

✔ Object Methods

Object.keys()
Object.entries()

🔧 9. Nested Objects

Objects inside objects (e.g., address inside user).

🔁 10. JSON (JavaScript Object Notation)
✔ JSON.stringify

Converts an object → string (useful for APIs, storage)

✔ JSON.parse

Converts string → object

✔ Deep Cloning

A method to completely copy nested objects with no reference issues
(using JSON.stringify + JSON.parse)

🛡 11. Optional Chaining (?.)

Optional Chaining allows safe access of nested object properties.

✔ What it does?

It prevents errors like:
"Cannot read property 'x' of undefined"

✔ How?

If any property in the chain does not exist, it returns undefined instead of breaking the program.

✔ Why it’s useful?

Prevents crashes

Useful with APIs

Cleaner code

No long if checks