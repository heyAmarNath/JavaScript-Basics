//Module 2: Operator
//Arithmetic Opeerators
let x = 10;
let y = 3;
console.log('Sum', x + y);
console.log('Difference', x - y);
console.log('Product', x * y);
console.log('Division', x / y);
console.log('Modulo', x % y);
console.log('Exponential', x ** y);

//Increment
let pre = 10;
let post = 10;
let postIncrement = post++;
let preIncrement = ++pre;
console.log('postIncrement', postIncrement);
console.log('preIncrement', preIncrement);

//Decrement
pre = 10;
post = 10;
let postDecrement = post--;
let preDecrement = --pre;
console.log('postDecrement', postDecrement);
console.log('preDecrement', preDecrement);

//Assignment Operators
let z = 10;
z += 5; //z=z+5
z -= 5; //z=z-5
z *= 5; //z=z*5
z /= 5; //z=z/5;

//Comparision Operator
let c = 100;
console.log(c > 99); //true
console.log(c >= 100); //true
console.log(c < 100); //false
console.log(c <= 100); //true

//Strict Equality
console.log('1' === 1) //false
console.log(1 === 1) //true
console.log('1' == 1) //true
console.log(1 == 1) //true

//Ternery Operators
let marks = 75;
let result = marks > 33 ? 'Pass' : 'Fail';
console.log(result);

//Logical Operators
let mood = true;
let condition = false;
console.log(mood && condition); //Logical AND
console.log(mood || condition); //Logical OR

//Bitwise Operators
console.log(1 | 2); //Bitwise AND
console.log(1 & 2); //Bitwise OR

//Falsy--> undefined || null || "" || NaN || 0 ||false
console.log(false || 'Amar'); //Amar