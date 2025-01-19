let exampleString = 'какой-нибудь текст';

console.log(capitalizeFirstLetter(exampleString));

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}