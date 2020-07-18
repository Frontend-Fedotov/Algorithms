function Evklid(first, second) {
	while (first % second != 0) {
  	let mod = first % second;
    first = second;
    second = mod;
  }
  return second;
}
console.log(Evklid(1112, 700));
