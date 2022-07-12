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
# (End at Page 27).

