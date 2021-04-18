primeNumber(50);

function primeNumber(value) {
    for (let number = 2; number <= value; number++)
        if (isPrime(number))
            console.log(number);
}

function isPrime(number) {
    let prime = true;
    for (let factor = 2; factor < number; factor++)
        if (number % factor == 0) {
            prime = false;
            break;
        }
    return prime;
}