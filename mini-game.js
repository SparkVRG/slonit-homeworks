miniGame();

function miniGame() {
  let min = 1;
  let max = 100;
  let estimatedNumber;
  let steps = {
    attempts: 0,
    ranges: [],
    results: []
  };
  
  let secretNumber = getRandomInt(min, max);
  
  while (estimatedNumber != secretNumber) {
    if (!estimatedNumber) {
      estimatedNumber = 50;
    } else if (secretNumber > estimatedNumber) {
      min = estimatedNumber + 1;
      estimatedNumber = getRandomInt(min, max);
      
      console.log('Компьютер 1: Больше.');
    } else if (secretNumber < estimatedNumber) {
      max = estimatedNumber - 1;
      estimatedNumber = getRandomInt(min, max);
      
      console.log('Компьютер 1: Меньше.');
    }
    
    console.log(`Компьютер 2: Пробую число ${estimatedNumber}.`)
    
    steps.attempts++;
    steps.ranges.push(`${min}-${max}`);
    steps.results.push(estimatedNumber);
  }
  
  console.log('Компьютер 1: Угадал!');
  
  console.log(`Попыток сделано: ${steps.attempts}`);
  console.log(`История диапазонов: ${steps.ranges}`);
  console.log(`История предполагаемых чисел: ${steps.results}`);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}