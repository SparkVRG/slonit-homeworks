function createRandomGenerator(min, max) {
    let numberMin = min;
    let numberMax = max;

    return function() {
        console.log(Math.floor(Math.random() * (numberMax - numberMin + 1)) + min);
    }
}

let randomGenerator1 = createRandomGenerator(15, 28);
randomGenerator1();
randomGenerator1();

let randomGenerator2 = createRandomGenerator(80, 90);
randomGenerator2();
randomGenerator2();