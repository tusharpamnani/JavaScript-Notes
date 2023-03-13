/* 
    Arithmetic expression is a combination of ....
    oparands (values, variables, etc)
    operators (+ - * / %)
    that can be evaluated to a value
    example, y = x + 5;
*/

let students = 20;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students % 3;

console.log(students);

/*
    Augumented Assignment Operator
    += -= *= /=
    shortcut for + - * / 
    students = students + 1  ----->>>> students += 1     
*/

students += 1;
students -= 1;
students *= 2;
students /= 2;

console.log(students);

/*
    Operator Precedence
    1. Paranthesis
    2. Exponents
    3. Multiplication & Division
    4. Addition & Subtraction    
*/

let results = 1+2*(3+4);
console.log(results);