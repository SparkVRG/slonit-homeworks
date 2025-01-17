let exampleArr = ['Яблоко', 'Апельсин', 'Слива', NaN, 'Груша', 'Тыква'];

console.log(
    'Работа функции mySlice',
    mySlice(exampleArr),
    mySlice(exampleArr, 1, 4),
    mySlice(exampleArr, -2, -1),
    mySlice(exampleArr, 2)
);

console.log(
    'Работа функции myIndexOf',
    myIndexOf(exampleArr),
    myIndexOf(exampleArr, 'Апельсин', 1),
    myIndexOf(exampleArr, 'Апельсин', 2),
    myIndexOf(exampleArr, 'Слива', -4),
    myIndexOf(exampleArr, 'Яблоко', -4),
    myIndexOf(exampleArr, 'Яблоко', 0),
    myIndexOf(exampleArr, 'Груша'),
    myIndexOf(exampleArr, NaN)
)

console.log(
    'Работа функции myIncludes',
    myIncludes(exampleArr),
    myIncludes(exampleArr, 'Апельсин', 1),
    myIncludes(exampleArr, 'Апельсин', 2),
    myIncludes(exampleArr, 'Слива', -4),
    myIncludes(exampleArr, 'Яблоко', -4),
    myIncludes(exampleArr, 'Яблоко', 0),
    myIncludes(exampleArr, 'Груша'),
    myIncludes(exampleArr, NaN),
    myIncludes(exampleArr, NaN, 2),
    myIncludes(exampleArr, NaN, 4)
)

function mySlice(arr, start, end) {
    if (!start && !end) {
        return arr;
    }

    start = start < 0 ? start + arr.length : start;
    end = end < 0 ? end + arr.length : end;

    if (end >= arr.length || !end) {
        end = arr.length;
    }

    let result = [];

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }

    return result;
}

function myIndexOf(arr, item, from) {
    if (!item) {
        return -1;
    }

    if (from) {
        from = from < 0 ? from + arr.length : from;
    }

    let result = -1;

    for (let i = from || 0; i < arr.length; i++) {
        if (arr[i] === item) {
            result = i;
            break;
        }
    }

    return result;
}

function myIncludes(arr, item, from) {
    if (item == undefined) {
        return false;
    }

    if (from) {
        from = from < 0 ? from + arr.length : from;
    }

    let result = false;

    for (let i = from || 0; i < arr.length; i++) {   
        if (Number.isNaN(item) && Number.isNaN(arr[i])) {
            result = true;
            break;
        }

        if (arr[i] === item) {
            result = true;
            break;
        }
    }

    return result;
}