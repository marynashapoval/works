while (true) {
    const inputData = prompt('Write your mathematical expression here:');
    const mathExpression = inputData.split('').join('');
    try {
        const mathAnswer = eval(mathExpression);
        if (mathAnswer === Infinity || mathAnswer === undefined 
            || mathAnswer === 0 || isNaN(mathAnswer)) {
            alert('Please input valid data');
        } else {
            alert(`${mathExpression} = ${mathAnswer}`);
        }
    } catch (e) {
        alert('Please input valid data');
    }
}
