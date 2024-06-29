const marvel_heros = ["spiderman","iron man", "thor"]
const dc_heros = ["batman","superman","wonder woman"]
/*
marvel_heros.push(dc_heros)
console.log(marvel_heros);*/

const allHeros = marvel_heros.concat(dc_heros);
/*
console.log(allHeros);
console.log(marvel_heros);
*/
const newHeros = [...marvel_heros,...dc_heros]

//spread out heros 
//console.log(newHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

//console.log((real_another_array));

const s1 = 15
const s2 = 78
const s3 = 96/*
console.log(Array.of(s1,s2,s3));

console.log(Array.from("Dibyajyoti "))
*/

