function calculateDefectiveBatteries() {
    let batteriesAmount = prompt('Input amount of batteries:');
    let defectiveRate = prompt('Input persentage of defective batteries:');
    const maxPersentage = 100;
    if (batteriesAmount >= 0 && defectiveRate >= 0 && 
        batteriesAmount !== isNaN && defectiveRate !== isNaN && defectiveRate <= maxPersentage) {
            let defectiveBatteriesAmount = batteriesAmount / maxPersentage * defectiveRate;
            let workingBatteriesAmount = batteriesAmount - defectiveBatteriesAmount;
            alert('Amount of batteries:' + batteriesAmount + '\nDefective rate:' + defectiveRate +
                    '\nAmount od gefective batteries:' + defectiveBatteriesAmount + 
                    '\nAmount of working batteries:' + workingBatteriesAmount);
    } else {
        alert('Invalid input data');
    }
}
