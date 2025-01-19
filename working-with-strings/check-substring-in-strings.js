let exampleString1 = 'строка';
let exampleString2 = 'рок';
let exampleString3 = 'джаз';
let exampleString4 = 'виноград джазби';

console.log(checkSubstringInStrings(exampleString1, exampleString2)); // строка, рок - true
console.log(checkSubstringInStrings(exampleString2, exampleString3)); // рок, джаз - false
console.log(checkSubstringInStrings(exampleString3, exampleString4)); // джаз, виноград джазби - true

function checkSubstringInStrings(str1, str2) {
    if (str1.includes(str2) || str2.includes(str1)) {
        return true;
    }

    return false;
}