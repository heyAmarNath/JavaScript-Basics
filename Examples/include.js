const array = [9, 8, 7, 5, 6, 2];
const result = include(array, 5);
console.log(result);

function include(array, searchElement) {
    for (let key of array)
        if (key === searchElement)
            return true;
    return false;
}