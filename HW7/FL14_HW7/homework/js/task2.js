function findMiddleCharacter() {
    const divider = 2;
    let inputWord = prompt('Input a word');
    let middleCharacter = Math.floor(inputWord.length / divider);
    if (!inputWord.replace(/\s/g, '').length) {
        alert('Invalid value');
    } else if (inputWord.length % divider === 0 &&
        inputWord.charAt(middleCharacter - 1) !== inputWord.charAt(middleCharacter)) {
        alert(inputWord.charAt(middleCharacter - 1) + inputWord.charAt(middleCharacter));
    } else if (inputWord.length % divider === 0 && inputWord.length > 0 &&
        inputWord.charAt(middleCharacter - 1) === inputWord.charAt(middleCharacter)) {
        alert('Middle characters are the same');
    } else if (inputWord.length % divider !== 0) {
        alert(inputWord.charAt(middleCharacter));
    } else if (inputWord.length < 1) {
        alert('Invalid value');
    }
}
