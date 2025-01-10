console.log("Hello Liam");

function sayHello() 
{
    console.log("Hello Liam")
}
sayHello();
sayHello();
sayHello();

function argumentFuntion (argument1, argument2)
{
    console.log(argument1, argument2);
}

function sayHelloTo(userName)
{
    console.log("Hello " + userName + "!");
}

sayHelloTo("Liam");
sayHelloTo("Steve");
sayHelloTo("Barry");

function greet(greeting, userName)
{
    console.log(greeting + " " + userName + "!");
}

greet("Good Morning ", "Liam");
greet("Bonjour ", "Steve");
greet("Buenos Dias " "Barry");

function add(a, b)
{
    return a + b;
}

const result = add(1, 5);
console.log("The result is ", result);
const anotherResult = add(2, 10);
console.log("Another result is ", anotherResult);

function multiply(a, b)
{
    return a * b;
}

function subtract(a, b)
{
    return a - b;
}

function divide(a, b)
{
    return a / b;
}

function calculate(a, b, operator)
{
    if (operator === "+")
    {
        return add(a, b);
    }
    else if (operator === "-")
    {
        return subtract(a, b);
    }
    else if (operator === "*")
    {
        return multiply(a, b);
    }
    else if (operator === "/")
    {
        return divide(a, b);
    }
}

function calculate(a, b, operator1)
{
    switch (operator1)
    {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

const results = calculate(1, 5, "+");
console.log("The results of this are", results)

const anotherResult1 = calculate(2, 10, "*");
console.log("Another result shows", anotherResult1);