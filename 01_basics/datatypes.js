"use strict"; // treat all js code as newer version

//alert(3+3) // we are using node js not browser 

//console.log(3+3)

let name ="Dibyajyoti"
let age = 20
let isLoggedIn =true
let state = null

// number =>2 to the power 53
//big int
// string =""
//boolean =>true/false
//null->datatype as well as stand alone value
//undefined
//symbol => uniqueness

// object 

/*
console.log(typeof name )
console.log(typeof null )
console.log(typeof undefined )
*/

//Primitives 
// 7type: String,Number, Boolean, null,undefined,
//Symbol,BigInt
/*
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id );
console.log(id2);
console.log(id === id2);

const bigNumber = 454878785454545121n
console.log(typeof bigNumber);

*/


// reference type or non-primitive :
//array,objects,functions 

const heros =["shaktimaan", "naagraj","doga"]
let myObj = {
    name : "dibyajyoti",
    age : 20,
}

const myfunction = function(){
    console.log("Hello world")
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myfunction);
console.log(heros);
console.log(myObj);
console.log(myfunction);
