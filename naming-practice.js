// В названии функции не пишу о том, что покупателей 3,
// так как это может быть массив любой длины.
function getTotalAmountOfMostValuableCostumers(spendings) {
    let result = 0;

    spendings.forEach(spending => {
        result += spending;
    });
    
    return result;
}

let spendings = [10000, 20000, 30000];
console.log(getTotalAmountOfMostValuableCostumers(spendings));