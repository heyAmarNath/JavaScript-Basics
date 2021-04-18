//Objects

//Basics
const circle = {
    radius: 1, //Property
    draw: function () { //Method
        console.log('Basic Object Construct');
    }
}
circle.draw();

//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('This is a method in Factory Fuction');
        }
    };
}
const myCircle = createCircle(2);
myCircle.draw();

//Constructor Function
function NewCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('This a method in Constructor Function');
    }
}
const newCircle = new NewCircle(1); // new create empty object --> with 'this' assign the property --> return Function
newCircle.draw();

//Dynamic Nature of Object
const obj = {
    size: 3,
}
obj.length = 4; //Add Object Property
obj['color'] = 'green';  //Another method to add new property
obj.fun = function () {
    console.log('Hello Dynamic');
};
console.log(obj);

delete obj.length; //Delete Object Property
console.log(obj);

console.log(NewCircle.constructor);

//Value vs Reference
let firstValue = 10;
let secondValue = firstValue;
firstValue = 20;
console.log('firstValue', firstValue, ' secondValue', secondValue); //Pass by Vakue

let firstRef = {
    value: 10
};
let secRef = firstRef;
firstRef.value = 20;
console.log('firstRef', firstRef.value, 'secRef', secRef.value); //Pass by Reference

//Enumerating Properties of Object
for (let key in circle) {
    console.log(key);
}

for (let key of Object.keys(circle)) {
    console.log(key);
}

for (let key of Object.entries(circle)) {
    console.log(key);
}

if ('radius' in circle)
    console.log('Yes');

//Cloning an Object
const copyCircle = {
    color: 'green'
}; //This may be empty or have some property or method already
for (let key in circle) {
    copyCircle[key] = circle[key];
}
console.log(copyCircle);

const assignCircle = Object.assign({}, circle);
console.log(assignCircle);

const spreadCircle = {
    ...circle
};
console.log(spreadCircle);

//Math
let randomValue = Math.random();
console.log(randomValue);

let ceilValue = Math.ceil(3.78590);
console.log(ceilValue);

let floorValue = Math.floor(3.587115);
console.log(floorValue);

//String
let message = "Hello Amar! How are you?";
console.log(message.toLocaleLowerCase());
console.log(message.split(" "));
console.log(message.length);
console.log(message.trim());
console.log(message.endsWith('you?'));
console.log(message.includes('How'));
console.log(message.replace('Amar', 'Amar Nath'));
console.log(message.indexOf('are'));

//Template Literal
const name = 'Alpha';
const mail =
    `Hello ${name},
We are glad that you have joined our team.
Wish you a wonderful journey.

With Regards
Amar Nath
`;
console.log(mail);

//Date
const now = new Date();
console.log(now.getFullYear());
console.log(now.toDateString());