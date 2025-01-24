function myFilter(arr, filterConditionFunction) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (filterConditionFunction(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

let numbers = [1, 2, 3, 4, 5];

let evenNumbers = myFilter(numbers, num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

let greaterThanThree = myFilter(numbers, num => num > 3);
console.log(greaterThanThree); // [4, 5]

console.log(numbers); // [1, 2, 3, 4, 5], исходный массив не изменился