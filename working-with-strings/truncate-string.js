let exampleString = 'Какой-нибудь текст, введённый пользователем несколько дней назад';

console.log(truncateString(exampleString, 40)); // обрезка по пробелу
console.log(truncateString(exampleString, 25)); // обрезка по знаку препинания

function truncateString(str, limit) {
    let punctuationMarks = [',', '.', '!', '?', ':', ';'];

    limit = str.lastIndexOf(' ', limit);

    if (punctuationMarks.includes(str[limit - 1])) {
        limit--;
    }
    
    return str.slice(0, limit) + '...';
}