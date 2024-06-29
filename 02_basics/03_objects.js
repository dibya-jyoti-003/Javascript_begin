//singleton object 

// object lierals 

// constructor method --
// Object.create ---> singleton object 

const mySym = Symbol("key1")

const JsUser ={
    "name" : "Dibyajyoti",
    [mySym] : "myKey1",
    age : 19,
    email : "dibya6148@gmail.com",
    isLogged : true
}
/*
console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser.name);
console.log(JsUser["name"]);

console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);
console.log(typeof mySym);

JsUser.name = "Karmakar"
console.log(JsUser.name)
Object.freeze(JsUser)
JsUser.name = "Dibyajyoti"
console.log(JsUser.name)
*/

JsUser.greeting = function(){
    console.log("Hello js user")
}

JsUser.greeting2 = function(){
    console.log(`Hello js user , ${this.name}`)
}

JsUser.greeting()
console.log(JsUser.greeting())

JsUser.greeting2()
console.log(JsUser.greeting2())