// По описанию задания не совсем понятно: я должен написать функции или всё же методы объекта? Предположил, что методы, поэтому в коде написал именно методы

let exampleObj = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7,

    getSumNumericFields() {
        let result = 0;

        for (let key in this) {
            if (!Number.isNaN(Number(this[key]))) {
                result += this[key];
            }
        }

        return result;
    },

    getArrNumericFieldsSortedInDescendingOrder() {
        let arrNumericFields = [];
        let result = [];

        for (let key in this) {
            if (!Number.isNaN(Number(this[key]))) {
                arrNumericFields.push([key, this[key]]);
            }
        }

        arrNumericFields.sort((a, b) => {
            return (b[1] - a[1]);
        });

        for (let elem of arrNumericFields) {
            result.push(elem[0]);
        }

        return result;
    }
};

console.log(exampleObj.getSumNumericFields());
console.log(exampleObj.getArrNumericFieldsSortedInDescendingOrder());