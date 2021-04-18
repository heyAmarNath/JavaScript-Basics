//Function Declaration
function message(name) {
    console.log('Hello', name);
}
message('Amar Nath');

//Named Function Expression
let hello = function msg() {
    console.log('Hello Named Function');
}
hello();

//Anonymous Function Expression
let hey = function () {
    console.log('Hey Anonymous Function');
}
hey();

//Argument
function sum() {
    let sum = 0;
    for (let i of arguments) //argument is an object in JS
        sum += i;
    return sum;
}
console.log(sum(1, 2, 3, 45));

//Rest Operator
function fact(...arg) { //Rest Parameter must be last parameter
    return arg.reduce((a, b) => a + b);
}
console.log(fact(1, 2, 3, 4, 5, 6, 7, 8));

//Default Parameter
function emi(principal, rate = 5, time = 10) { //Default Parameter must be last parameter
    return principal * rate * time / 100;
}
console.log(emi(5000));

//Getter and Setter
const area = {
    height: 50,
    width: 100,
    length: 60,
    get fullArea() {
        return height * width * length;
    },
  }
console.log(area);