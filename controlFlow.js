//Control Flow

//If-else
let time = 10;
if (time >= 6 && time < 12)
    console.log('Good Morning');
else if (time >= 12 && time < 18)
    console.log('Good Afternoon');
else
    console.log('Good Night');

//Switch-Case
let user = 'Guest';
switch (user) {
    case 'Guest':
        console.log('Guest User');
        break;
    case 'Admin':
        console.log('Admin User');
        break;
    default:
        console.log('Invalid User');
}

//For Loop
console.log("Curently in For Loop");
for (let i = 0; i < 3; i++) {
    console.log(i);
}

//While Loop
console.log("Currently in While Loop");
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

//Do-while Loop
console.log("Currently in Do while Loop");
i = 0;
do {
    console.log(i * i);
    i++;
} while (i < 3);

//For-in Loop
console.log("Currently in For-in Loop");
let color = ['red', 'green', 'blue', 'yellow'];
for (let index in color)
    console.log(index, color[index]);

//For-of Loop
console.log("Currently in For-of Loop");
for (let element of color)
    console.log(element);

//Break & Continue
let value = 10;
for (let i = 0; i < value; i++) {
    if (i > 5) {
        console.log('Greater than 5', i);
        continue;
    } else {
        console.log('Less than 5', i);
        break;
    }
}