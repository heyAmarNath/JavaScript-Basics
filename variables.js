//Variables
let firstName = 'Amar'; //String
let lastName = 'Nath'; //String
let age = 23; //Number
let isSingle = true; //Boolean
let comapny = undefined; //undefined
let luckyNumber = null; //object
console.log(firstName);

//Object
let person = {
    firstName: 'Amar', //Property
    age: 23, //Property
    sex: 'Male' //Property
};
console.log(person);
console.log(person.age);
console.log(person['sex']);

//Function
function father(name) {
    console.log('I am the father of', name)
}
father('Alpha'); //Function Calling

//Function with return value
function factorial(number) {
    if (number == 0 || number == 1)
        return number;
    return number * factorial(number - 1);
}
console.log('factorial ->', factorial(5));