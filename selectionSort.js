 function selectionSort(arr) {
 	for (let i = 0; i < arr.length - 1; i++ ) {
  	let least = i;
    for (let j = i + 1; j < arr.length; j++) {
    	if (arr[j] < arr[least]) {
      	least = j;
      }
    }
    let tmp = arr[i];
		arr[i] = arr[least];
		arr[least] = tmp;
  }
  return arr;
 }
 let myArr = [1, 5, 2, 4, 3, 6, 7, 10, 8, 9];
 alert(selectionSort(myArr));
