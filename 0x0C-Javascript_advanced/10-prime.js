function countPrimeNumbers() {
    let limit = 100;
    let n = [...Array(limit).keys()];

    for (let i = 2; i * i <= limit; i++) {
        if (n[i] != "x") {
            for (let j = i * i; j <= limit; j += i) {
                n[j] = "x";
            }
        }
    }

    let primes = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] > 1) {
            primes.push(n[i]);
        }
    }

    return primes.length;
};

let ts = performance.now();
for (let count = 1; count <= 100; count++) {
    countPrimeNumbers();
}
let tf = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (tf - ts) + " milliseconds.");
