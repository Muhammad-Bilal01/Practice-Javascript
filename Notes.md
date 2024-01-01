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

**var** is also a keyword that define we need a container to store value.

**variable_name** this is refernce name to call the actual value and we used this to remember value.

**=** this is called an assignment operator to store actual value in the container (memory).

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

## Intermidiate

## Advance
