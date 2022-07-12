# Reserved Words
- The following words are reserved for use by the language and cannot be used to
name variables (or the function parameters and object properties that appear in later
chapters):
# * * * * * * * * * * * * * * *
# abstract, boolean, break, byte, case, catch, char, class, const,
# continue, debugger, default, delete, do, double, else, enum,
# export, extends, false, final, finally, float, for, function,
# goto, if, implements, import, in instanceof, int, inteface,
# long, native, new, null, package, private, protected, public,
# return, short, static, super, switch, synchronized, this, throw,
# throws, transient, true, try, typeof, var, volatile, void, while,with

- These words are reserved because many of them are used by the language itself,
and you will come across them later in this book.

-Many are not used by the language, however; one can only assume they were planned
to be used at some point, but never were. There are also a few words not reserved
that should have been as they are an important part of the language:
- undefined, NaN, Infinity.

- These are covered later in this chapter. You should also avoid using these words
for variable names.

# Assignment
- To assign a value to a variable, we use the = operator. This example shows how we
would set the variable name to point to the string literal "Walter" :

var name; // declare the variable first
<< undefined
name = "Walter"; // assign the variable to a string
<< "Walter"

- Once the variable has been assigned a value, it is displayed in the console output.
To see the value of a variable, simply enter it in the console. The variable name now
refers to the string "Walter" , so it will behave exactly the same as that string:

name;
<< "Walter"
typeof name;
<< "string"

-This is a useful way of dealing with long strings as it saves us from typing them
over and over again. It’s also useful if the value stored in the variable is likely to
change (hence the name, variable).

You can declare and initialize a variable at the same time:
var name = "Jesse";
<< "Jesse"

- You can also declare and assign values to multiple variables in a single statement:
var x = 2, y, z = "Hi!"; // y has only been declared, it's undefined
<< undefined

# String Properties and Methods
- Primitive values and objects have properties and methods.
# Properties are information
about the object or value, while methods perform an action on the object or
value―either to change it or to tell us something about it.

# Object Wrappers

-Technically, only objects have properties and methods. JavaScript overcomes this
by creating wrapper objects for primitive values. This all happens in the back-
ground, so for all intents and purposes it appears that primitive values also have
properties and methods.

- We can access the properties of a string using dot notation. This involves writing a
dot followed by the property we are interested in. For example, every string has a
length property that tells us how many characters are in the string:

name = "Heisenberg"; // declare and assign a variable
<< "Heisenberg"
name.length; // call the length method on name
<< 10
-As you can see, this tells us that there are ten characters in the string stored in the
name variable.

# Bracket Notation
- Another notation you can use to access a primitive value’s properties are square
brackets:
name['length']; // note the property name is in quote marks
<< 10

# METHOD
-A method is an action that a primitive value or object can perform. To call a method,
we use the dot operator [.] followed by the name of the method, followed by par-
entheses (this is a useful way to distinguish between a property and a method―meth-
ods end with parentheses). For example, we can write a string in all capital letters
using the toUpperCase() method:

name.toUpperCase();
<< "HEISENBERG"

# Numbers
Number can be integers (whole numbers, such as 3) or floating point decimals (often
referred to as just "decimals" or "floats", such as 3.14159). For example:
typeof 3;
<< "number"
typeof 3.14159;
<< "number"

# Number Constructor Function
- Just like strings, numbers also have a constructor function:
new Number(3)

# Octal and Hexadecimal Numbers
- If a number starts with a 0x , it is considered to be in hexadecimal (base 16) notation:
0xAF; // A represents 10, F represents 15
<< 175

# Changing Variables
If a variable has been assigned a numerical value, it can be increased using the fol-
lowing operation:

# Incrementing Values
# Converting Between Strings and Numbers

# Truthy and Falsy Values
The fact that empty strings and zero are considered falsy can cause confusion at
times, especially since other programming languages don't behave similarly. A
ninja needs to be especially careful when dealing with numbers that might be
zero, or strings that are empty.
For more on truthy and falsy values, see this article on SitePoint. 

# Logical Operators
A logical operator can be used with any primitive value or object. The results are
based on whether the values are considered to be truthy or falsy.
# When is Not a Number not Not a Number?
The only strange result produced by hard equality is this:
NaN === Nan;
<< false

# Summary

In this chapter, we’ve learned about the primitive data types that are the basic
building blocks of all JavaScript programs: strings, numbers, Booleans, undefined
and null. We’ve also learned about variables and different methods for strings and
numbers, as well as how to convert between the two types. We finished by looking
at the different logical operators and ways of comparing values.
In the next chapter, we’ll be looking at arrays, logic, and loops.

# (End at Page 27).

