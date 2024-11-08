let num = 266219;
let numString = num.toString()


let result = 1;
for (const i of numString) {
	result *= +i
}
console.log(result);


let numResult = result ** 3
console.log(numResult);


let r = numResult.toString().substring(0, 2)
console.log(r);




