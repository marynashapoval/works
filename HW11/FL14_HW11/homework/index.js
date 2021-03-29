let isEquals = (firstValue, secondValue) => firstValue === secondValue;

let numberToString = (numberValue) => numberValue.toString();

let storeNames = (...strInput) => {
    return strInput
};

let isBigger = (firstArgument, secondArgument) => firstArgument > secondArgument;

let getDivision = (firstArgument, secondArgument) => isBigger(firstArgument, secondArgument) ?
firstArgument / secondArgument : secondArgument / firstArgument;

let negativeCount = (arrayInput) => {
    let counter = 0;
    for (let i = 0; i < arrayInput.length; i++) {
        if (+arrayInput[i] < 0) {
            counter++;
        }
    }
    return counter;
};

let letterCount = (fullWord, findLetter) => {
    let counter = 0;
    for (let i = 0; i < fullWord.length; i++) {
        if (fullWord[i] === findLetter) {
            counter++;
        }
    }
    return counter;
};

let countPoints = (results) => {
    let maxpoint = 3;
    let points = 0;
    for (let i = 0; i < results.length; i++) {
        let eachGame = results[i].split(':');
        if (+eachGame[0] > +eachGame[1]) {
            points += maxpoint;
        } else if (+eachGame[0] < +eachGame[1]) {
            points += 0;
        } else if (+eachGame[0] === +eachGame[1]) {
            points += 1;
        }
    }
    return points;
};