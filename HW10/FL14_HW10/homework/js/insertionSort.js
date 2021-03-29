console.log('Insertion sort');

function insertionSort(arr){
    let len = arr.length;

    for(let i = 1; i < len; i++){
        let el = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > el) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = el;
    }
   return arr;
}
