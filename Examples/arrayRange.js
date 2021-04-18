const num = arrayRange(-10, -44);
console.log(num);

function arrayRange(min, max) {
    const array = [];
    while (min <= max) {
        array.push(min);
        min++;
    }
    return array;
}