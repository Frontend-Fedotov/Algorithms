function linearSearch(item, list) {
	let position = -1;
	for (let i = 0; i < list.length - 1; i++) {
  	if ( item == list[i]){
    	position = i;
    }
  }
  return position;
}
let myList = [1, 2, 3, 5, 2, 4, 6, 8, 3];
console.log(linearSearch( 8, myList));
