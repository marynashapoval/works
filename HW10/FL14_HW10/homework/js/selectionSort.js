console.log('Selection sort');
function selectionSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        let minIdx = i;
        for(let j = i+1; j < len; j++){
            if(arr[minIdx] > arr[j]){
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    return arr;
}
