# COMMENTS
# In JavaScript there are two types of comment, (1)Single line comments, (2)Multi line comments.

# Single line comments start with // and finish at the end of the line: Example of a single line comment:
// this is a short comment.

# (2)Multi line comments:
/* This is a longer comment
anything here will be ignored
This is a useful place to put notes
*/
-It’s good practice to write comments in your code.

# JavaScript Grammar
-The syntax used by JavaScript is known as a C-style syntax, which is similar to the
one used by Java.

# A JavaScript program is made up of a series of statements. Each statement ends with a new line or semicolon.
- Here is an example of two statements, one on each line:
a = "Hello World!"
alert(a)

# This example could also be written as follows, using semicolons at the end of each statement:

a = "Hello World!";alert(a);

-For this reason, it’s considered best practice to combine the two and write each
statement on a new line, terminated by a semi-colon, like so:

a = "Hello World!";
alert(a);

-A block is a series of statements that are collected together inside curly braces:
{
// this is a block containing 2 statements
var a = "Hello!";
alert(a);
}
-Blocks do not need to be terminated by a semicolon.

# Data Types
# JavaScript has six different types of value. There are five primitive data types:
■ string
■ number
■ Boolean
■ undefined
■ null
- Any value that isn’t one of the primitive data types listed is an object
-JavaScript has a special operator called typeof for finding out the type of a value.
# Here are some examples of the different value types:
typeof "hello"
<< "string"
typeof 10
<< "number"
typeof true
<< "boolean"

typeof { ninja: "turtle" }
<< "object"

# Operators
- An operator applies an operation to a value, which is known as the operand. A
unary operator only requires one operand; for example:
typeof "hello"
-The operator is typeof and the string "hello" is the operand.
# A binary operator requires two operands; for instance:
3 + 5
-The operator is + and the numbers 3 and 5 are the operands. There is also a ternary
operator that requires three operands, which is covered in the next chapter.

# Strings
- A string is a collection of letters (or characters, to be more precise). We can create
a string literal by writing a group of characters inside quote marks like this:

"hello"

# String Constructor Function
- new String("hello")

-This will create a new string that is the same as the string literal "hello", although
it will be classed as an object rather than a primitive value. For this reason it is
preferable to use the string literal notation ... not to mention it requires less typing
to use literals!
-We can also use single quote marks if we prefer:
-'hello'
- If you want to use double quote marks inside a string literal, you need to use single
quote marks to enclose the string. And if you want to use an apostrophe in your
string, you need to employ double quote marks to enclose the string:
- "It’s me"

- Another option is to do what’s called escaping the quotation mark. You place a
backslash before the apostrophe so that it appears as an apostrophe inside the string
instead of terminating the string:

'It\'s me'

# Escaping Characters
The backslash is used to escape special characters in strings such as:
■ single quote marks \'
■ double quote marks \"
■ end of line \n
■ carriage return \r
■ tab \t
-If you want to actually write a backslash, you need to escape it with another
backslash:
"This is a backslash \\"
<< "This is a backslash \"

# Variables
- Variables are common in programming languages. They are a way of storing a value
in memory for later use. In JavaScript, we start by declaring a variable. This is done
using the keyword var :

var a; // declare a variable called a
<< undefined
var message;
<< undefined

-Notice that the console outputs undefined . This is a special JavaScript primitive
value that is covered later in the chapter, but it’s basically saying that the variable
has been created but is yet to be assigned a value.

-You don’t actually have to declare variables before using them, but as we’ll see later,
bad things can happen if you choose not to. So remember, a ninja will always declare
variables.

# You can even declare multiple variables at once:

var a,b,c; // 3 variables declared at once
<< undefined

# Rules for Naming Variables:
- When naming variables, you should try to give them sensible names that describe
what the variable represents; hence, answer is a better variable name than x.
- A variable name can start with any upper or lower case letter, an underscore (_),
or dollar symbol ($). It can also contain numbers but cannot start with them. Here
are some examples:
$name
_answer
firstName
last_name
address_line1
- Variable names are case sensitive, so ANSWER is different to Answer and answer.
When using multiple words for variable names there are two conventions that
can be used. Camel case starts with a lowercase letter and then each new word is
capitalized:
-firstNameAndLastName
- Underscore separates each new word with an underscore:
- first_name_and_last_name
- JavaScript’s built-in functions use the camel-case notation, but you can choose to
use one or the other or a combination of the two when naming variables. What’s
important for a ninja is to be consistent.




