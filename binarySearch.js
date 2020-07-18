function binarySearch(list, value) {
    let start = 0;    //левая граница
    let end = list.length - 1;   //правая граница
    let position = -1; //нужная нам позиция
    let isFound = false;
    let middle;
 
    while (isFound === false && start <= end) {
        middle = Math.floor((start + end)/2);
        if (list[middle] == value) {
            isFound = true;
            position = middle;
        } else if (list[middle] > value) {  //если первая половина
            end = middle - 1;
        } else {  //если вторая половина
            start = middle + 1;
        }
    }
    return position;
}
let myList = [1, 3, 4, 6, 7, 8, 10, 13, 14];
console.log(binarySearch(myList, 4));
