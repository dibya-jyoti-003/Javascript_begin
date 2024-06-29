const myArr= [0,1,4,9,8,5,true,"dibyajyoti"]
//console.log(myArr[1]);

const heros = ["spiderman","batman"]/*
console.log(typeof heros);
console.log(typeof heros[0]);
*/
const myArr2 = new Array(4,7,8,5)
/*
console.log(myArr2);
myArr2.push(9,8,9);
console.log(myArr2);
myArr2.pop()
console.log(myArr2);

myArr.unshift(4)
console.log(myArr);


console.log(myArr.includes(0));
console.log(myArr.indexOf(0));
console.log(myArr.join());
*/

// slice and splice 
console.log("original ->",myArr);

const slicing = myArr.slice(2,6);

console.log("sliced ",slicing );
console.log("original ->",myArr);

const splicing = myArr.splice(2,6);

console.log("spliced ",splicing );
console.log("original ->",myArr);