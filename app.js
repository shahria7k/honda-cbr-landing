function intersection(...arrays) {
	let result = [];
	for (let i = 0; i < arrays.length; i++) {
		let temp = [...arrays.slice(0, i), ...arrays.slice(i + 1, arrays.length)];
		arrays[i].forEach((item) => {
			if (
				temp[0].indexOf(item) > 0 &&
				temp[1].indexOf(item) > 0 &&
				result.indexOf(item) < 0
			) {
				result.push(item);
			}
		});
	}
	return result;
}

// console.log(
// 	intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );
function fibonacci(n) {
	let fibo = [0, 1]
	for (let i = 2; i <=n; i++) {
		fibo[i]=fibo[i-1]+ fibo[i-2];
	}
	return fibo;
}
// console.log(fibonacci(10));
let a= [1,2,3,4,2,6];
console.log(a.indexOf(2), a.lastIndexOf(2))