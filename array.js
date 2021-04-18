const array = [1, 2, 'a', true];
//Add in the End
array.push(9, 8, 6);
console.log(array);
//Add in Middle
array.splice(3, 0, 99);
console.log(array);
//Add in Begin
array.unshift(2, 5, 7);
console.log(array);

const key = [1, 2, 3, 4, 3, 2];
console.log(key.indexOf(3)); //Return first index of the given element
console.log(key.indexOf(5)); //Return -1 in case element not found
console.log(key.lastIndexOf(3)); //Return the last index of given element
console.log(key.includes(5)); //Return true if element exist otherwise false

const item = [{
        id: 1,
        name: 'Book'
    },
    {
        id: 2,
        name: 'Pen'
    }
];
const items = item.find(function (element) {
    return element.name === 'Book';
});
console.log(items);

const items2 = item.find(element => element.name === 'Book'); //ES6 to Code short
console.log(items2);

const itemsIndex = item.findIndex(function (element) {
    return element.name === 'Pen';
});
console.log(itemsIndex);

//Removing element

//Last element
const list = [1, 5, 9, 7, 5, 3, 6, 4, 2, 8];
list.pop();
console.log(list);

//Middle Element
list.splice(2, 5);
console.log(list);

//First Element
list.shift(5);
console.log(list);

//Emptying an Array
let myArray = [1, 2, 5, 8];

//Method 1
myArray = [];
console.log(myArray);

//Method 2
myArray.length = 0;

//Method 3
myArray.splice(0, myArray.length);

//Method 4
while (myArray.length > 0)
    myArray.pop();

//Combing and Slicing
const array1 = [5, 9, 8, 7, 5];
const array2 = [1, 8, 5, 7, 6, 4, 3];
const combine = array1.concat(array2);
console.log(combine);

const sliced = combine.slice(0, 5);
console.log(sliced);

//Spread Method of Combing and SLicing
const spreadCombine = [...array1, 'new', ...array2];
console.log(spreadCombine);

const spreadSlice = [...spreadCombine];
console.log(spreadCombine);

//Iterate an Array

//Method 1
for (let key of combine) {
    console.log(key);
}

//Method 2
for (let index in combine) {
    console.log(index, combine[index]);
}

//Method 3
combine.forEach((value, index) => console.log('value:', value, 'index:', index));

//Join and Split
const a1 = [1, 2, 5, 8, 9];
const join = a1.join('<');
console.log(join);

let my = "Hello Good Morning"
const split = my.split(' ');
console.log(split);
console.log(split.join('-'));

//Sorting an Array
console.log(combine.sort());
console.log(combine.reverse());

const subject = [{
    id: 1,
    name: 'Mathematics'
}, {
    id: 2,
    name: 'History'
}, ];
console.log(subject.sort());

const sorting=subject.sort(function(a,b){
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;
    return 0;
});
console.log(subject);

//Every and Some Method
const alpha=[1,2,3,4,-99];
const allPositive =alpha.every(function (value){
    return value>0;
});
console.log(allPositive);
const atLeastOne=alpha.some(function(value){
    return value>0;
});
console.log(atLeastOne);

//Filtering an Array
const filtering=alpha.filter(v=>v>=0);
console.log(filtering);

//Map an Array
const beta=[11,56,89,87];
const mapping = beta.map(e=>'Height' + e );
console.log(mapping);

const objMap=beta.map(e=>({value :e}));
console.log(objMap);

//Sum and Reduce
let sum=0;
for(let i of beta)
    sum+=i;
console.log(sum);

const accu=beta.reduce((a,c)=>a+c);
console.log(accu);