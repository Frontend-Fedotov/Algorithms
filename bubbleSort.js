function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
    return arr;
}
let myArr = [1, 3, 2, 7, 9, 11, 10, 8, 4, 5, 6, 12];
console.log(bubbleSort(myArr));
