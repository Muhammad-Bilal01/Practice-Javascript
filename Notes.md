# Learn Complete Javascript

## Basics

### Chapter 1 - Alert

`alert()` is a function is used to show popup message to the user.

alert is a **keyword** in js.
**keyword** is a word that has special meaning for Javascript.

**\*Note** that alert isn't capitalized. If you capitalize it, the script will stop.

```Javacript Code
alert("Hello World from JS")
```

### Chapter 2 - Variables for String

**Variable**:Varaible refers to a container which we used to store some values.

**String**: String is collection of charaters enclosed with Quotation marks.Eg:"Hello World","Bilal","What you are doing" ...

**Syntax for Variables**

`var variable_name = value;`

**Define**

**`var`** is also a keyword that define we need a container to store value.

**`variable_name`** this is refernce name to call the actual value and we used this to remember value.

**`=`** this is called an assignment operator to store actual value in the container (memory).

```Javascript Code
var myName = "Bilal";
var myNationality = "Pakistan";

// used this value
alert(myName);
alert(myNationality);
```

### Chapter 3 - Variable for Numbers

**Number** is a numeric value used to perform arithmethic operations.

**\*Note** If you enclose a number in quotation marks, it's a string. JavaScript can't do addition on it. It can do addition only on numbers not enclosed in quotes.

```Javascript Code
var age = 18;
var weight  = 200;

alert(age);
alert(weight + 120)

```

### Chapter 4 - Variable Names Legal and Illegal

Naming Convention For Varibale

- A variable name can't contain any spaces.
- A variable name can contain only letters, numbers, dollar signs($), and underscores(\_).
- Though a variable name can't be any of JavaScript's keywords.
- Capital letters are fine, but be careful. Variable names are case sensitive. A rose is not a
  Rose.

---

| Legal Variable Names | Illegal Variable Names |
| -------------------- | ---------------------- |
| `age`                | `2ndName`              |
| `user_score`         | `my variable`          |
| `_totalAmount`       | `special-character`    |
| `first_name`         | `123abc`               |
| `MAX_SIZE`           | `illegal-name!`        |

---

### Chapter 5 & 6- Math expressions: Familar and Unfamilar Operators.

Here's a table listing some common arithmetic operators in JavaScript:

| Operator | Description         | Example                 |
| -------- | ------------------- | ----------------------- |
| `+`      | Addition            | `result = num1 + num2;` |
| `-`      | Subtraction         | `result = num1 - num2;` |
| `*`      | Multiplication      | `result = num1 * num2;` |
| `/`      | Division            | `result = num1 / num2;` |
| `%`      | Modulus (Remainder) | `result = num1 % num2;` |
| `++`     | Increment           | `num++;`                |
| `--`     | Decrement           | `num--;`                |

**Explanation**:

1. **Addition (`+`):** Adds two values together.
2. **Subtraction (`-`):** Subtracts the right operand from the left operand.
3. **Multiplication (`*`):** Multiplies two values.
4. **Division (`/`):** Divides the left operand by the right operand.
5. **Modulus (`%`):** Returns the remainder of the division of the left operand by the right operand.
6. **Increment (`++`):** Increases the value of the operand by 1.
7. **Decrement (`--`):** Decreases the value of the operand by 1.

Example Usage:

```javascript
let num1 = 10;
let num2 = 5;
let result;

result = num1 + num2; // result = 15
result = num1 - num2; // result = 5
result = num1 * num2; // result = 50
result = num1 / num2; // result = 2
result = num1 % num2; // result = 0 (remainder of 10 / 5)
num1++; // num1 is now 11
num2--; // num2 is now 4
```

These operators are fundamental for performing arithmetic operations in JavaScript.

### PostFix And PreFix Operators

In JavaScript, postfix and prefix operators are used for incrementing or decrementing the value of a variable. These operators are `++` (increment) and `--` (decrement).

1. **Postfix Increment (`++`):**

   - Adds 1 to the current value of the variable.
   - Returns the original value of the variable.
   - The syntax is `variable++` or `++variable`.

   Example:

   ```javascript
   let num = 5;
   let result = num++;
   console.log(result); // Output: 5
   console.log(num); // Output: 6
   ```

2. **Postfix Decrement (`--`):**

   - Subtracts 1 from the current value of the variable.
   - Returns the original value of the variable.
   - The syntax is `variable--` or `--variable`.

   Example:

   ```javascript
   let num = 8;
   let result = num--;
   console.log(result); // Output: 8
   console.log(num); // Output: 7
   ```

3. **Prefix Increment (`++`):**

   - Adds 1 to the current value of the variable.
   - Returns the updated value of the variable.
   - The syntax is `++variable`.

   Example:

   ```javascript
   let num = 3;
   let result = ++num;
   console.log(result); // Output: 4
   console.log(num); // Output: 4
   ```

4. **Prefix Decrement (`--`):**

   - Subtracts 1 from the current value of the variable.
   - Returns the updated value of the variable.
   - The syntax is `--variable`.

   Example:

   ```javascript
   let num = 9;
   let result = --num;
   console.log(result); // Output: 8
   console.log(num); // Output: 8
   ```

It's important to understand the difference between postfix and prefix forms, especially when the operators are used within more complex expressions. The value returned by the postfix form is the original value, while the value returned by the prefix form is the updated value after the increment or decrement operation.

### Chapter 7 - Math expressions: Eliminating ambiguity

Ambiguity means BODMAS, in JS operators has precedence to perform math expression. The High precedence operator is perform first. but in BODMAS we used paranthesis to restrict the expression.

```Javascript
var total_cost = 12 + 5 * 8;
console.log(total_cost); // 52


// using BODMAS
var totalCost = (12 + 5) * 8;
console.log(totalCost); // 136

```

You see the difference of the above two expression.

### Chapter 8 - Concatenating text String

Concatenation is used to merge two or more than two string to create a descriptive message.

Using the plus operator to cancatenate the two Strings

```Javascript
var name = "Bilal";
var message = "Thanks " + name;
alert(message); // Thanks Bilal
```

If you put numbers in quotes, JavaScript concatenates them as strings rather than adding them. This code...

```Javascript
alert("2" + "2"); // 22
```

If we try to add numbers with string it will cancatenate as a String and combine them:

```javascript
alert("2 plus 2 = " + 2 + 2); // 2 plus 2 = 22

alert(2 + "age"); // 2age
```

we can also used `.concat()` metghods to combine two strings.

```Javascript
var first_name = "Muhammad ";
var last_name = "Bilal";

var full_name = first_name.concat(last_name);
console.log(full_name);
```

### Chapter 9 - Prompts

`prompt()` is just like alert but the differnce is that `alert()` is used to show message and `prompt()` is used to ask question and gather information from the user.
`prompt()` is also a window method in javascript and javascript keyword.
prompt always a return a value in string enter by the user.

```javascript
var username = prompt("Enter Your Name");
alert("Thanks " + username);
```

### Chapter 10 - If Statements

`if statement` is used to maintain conditional logics in our programs. let us suppose we create a program for print the salary of the employee.

- If the employee's salary is above 5000 add a bonus of 2000
- If the employee's salary is above 10,000 add a bonus of 5000.
- If the employee's salary is less than 5000 not need to add bonus.

```javascript
var salary = 5000;
if (salary > 5000) {
  salary = salary + 2000;
}
if (salary > 10000) {
  salary = salary + 5000;
}
alert(salary);
```

### Chapter 11 - Comparision Operators

In JavaScript, comparison operators are used to compare values and return a Boolean result (either true or false). Here are the common comparison operators in JavaScript:

| Operator | Description                     | Example   |
| -------- | ------------------------------- | --------- |
| `==`     | Equality (with type coercion)   | `a == b`  |
| `!=`     | Inequality (with type coercion) | `a != b`  |
| `===`    | Strict Equality (no coercion)   | `a === b` |
| `!==`    | Strict Inequality (no coercion) | `a !== b` |
| `>`      | Greater Than                    | `x > y`   |
| `<`      | Less Than                       | `x < y`   |
| `>=`     | Greater Than or Equal To        | `x >= y`  |
| `<=`     | Less Than or Equal To           | `x <= y`  |

**Explanation**:

1. **Equality (`==`):** Checks if two values are equal (with type coercion).
2. **Inequality (`!=`):** Checks if two values are not equal (with type coercion).
3. **Strict Equality (`===`):** Checks if two values are equal without type coercion.
4. **Strict Inequality (`!==`):** Checks if two values are not equal without type coercion.
5. **Greater Than (`>`):** Checks if the value on the left is greater than the value on the right.
6. **Less Than (`<`):** Checks if the value on the left is less than the value on the right.
7. **Greater Than or Equal To (`>=`):** Checks if the value on the left is greater than or equal to the value on the right.
8. **Less Than or Equal To (`<=`):** Checks if the value on the left is less than or equal to the value on the right.

```javascript
let a = 5;
let b = "5";
console.log(a == b); // Output: true (after type coercion)

let a = 5;
let b = "5";
console.log(a != b); // Output: false (after type coercion)

let a = 5;
let b = "5";
console.log(a === b); // Output: false (no type coercion)

let a = 5;
let b = "5";
console.log(a !== b); // Output: true (no type coercion)

let x = 10;
let y = 5;
console.log(x > y); // Output: true

let x = 3;
let y = 8;
console.log(x < y); // Output: true

let x = 5;
let y = 5;
console.log(x >= y); // Output: true

let x = 3;
let y = 3;
console.log(x <= y); // Output: true
```

These operators are fundamental for making decisions and controlling the flow of a program based on the comparison of values.

### Chapter 12 - if...else and else if statements

In the previous chapter, we will learn `if statements` that any condition we used to create a new if statement.
But the problem is that for any case where its true or false our programs execute this lines and that's make our program slow. so here is `if...else statements` comes. when we want to do something when the condition is true and also do something if the condition goes to false.

let's take a scenerio:

- if the percentage of the students is greater than 70, show an alert box to say congrats.
- and if the percentage is is less than equal to 70, show the popup to say "Need work Hard!".

by using only `if statements`

```javascript code
// add plus operator before prompt method to convert string into Number
var percentage = +prompt("Enter Percentage");
if (percentage > 70) {
  alert("Congratulations");
}

if (percentage <= 70) {
  alert("need hard word");
}
```

we does not need to check the second condition if the first condtion is false.
by using `if...else statements`

```javascript
var percentage = +prompt("Enter Percentage");
if (percentage > 70) {
  alert("Congratulations");
} else {
  alert("need hard word");
}
```

but what if we have multiple condition like create a complete grading system.

- percentage >= 80 => print A+
- percentage >= 70 => print A
- percentage >= 60 => print B
- percentage >= 50 => print C
- percentage >= 40 => print F

here comes `if...else if...else statements`

```javascript
var percentage = +prompt("Enter Percentage");

if (percentage >= 80) {
  alert("A+");
} else if (percentage >= 70) {
  alert("A");
} else if (percentage >= 60) {
  alert("B");
} else if (percentage >= 50) {
  alert("C");
} else {
  alert("F");
}
```

### chapter 13 - Testing set of Conditions

Certainly! Here's a table summarizing the logical operators in JavaScript along with an example scenario:

| Operator | Name        | Example    | Description                               |
| -------- | ----------- | ---------- | ----------------------------------------- |
| `&&`     | Logical AND | `a && b`   | return `true` if a and b both are true.   |
| `\|\|`   | Logical OR  | `a \|\| b` | return `true` if any one of them are true |
| `!`      | Logical NOT | `!a`       | reverse the condition                     |

Now, let's create a scenario to understand these operators:

**Scenario: Admission Eligibility**

Imagine a school admission is open, the criteria of the admission is that if test score is greater than equal to 50 and last class score is greater than 60, then the admission is confirmed.

```javascript
var testScore = +prompt("Enter test score");
var lastClass = +prompt("Enter last class score");

// Logical AND: Both criteria must be met for admission
if (testScore >= 50 && classScore > 60) {
  alert("admission confirmed");
} else {
  alert("sorry");
}
```

This scenario demonstrates how logical operators can be used to make decisions based on multiple conditions in a program.

### Chapter 14 - if statements nested

we can used if statement inside the if statements

```javascript
var food = "biryani";
var expanse = 50;
if (food === "biryani") {
  if (expanse > 40) {
    alert("take a bottle of pakola");
  } else {
    alert("only take food");
  }
}
```

## Intermidiate

## Advance
