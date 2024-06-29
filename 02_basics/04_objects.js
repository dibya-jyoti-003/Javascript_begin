// declare objects using constructor --singleton

const tinderUser = new Object() // singleton object 

//const tinderUser = {} ---> non-singleton object 

tinderUser.id ="123dif"
tinderUser.name = "hitesh"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regUser = {
    username : "clash_dibya",
    fullname : {
        firstname : "dibyajyoti",
        lastname : "karmakar"
    }
}
/*
console.log(regUser);
console.log(regUser.fullname);
console.log(regUser.fullname.firstname);*/

const obj1 = {1:'a',2: 'b'}
const obj2 = {3:'a',4: 'b'}
const obj4 = {5:'a',6: 'b'}

const obj3 = {...obj1,...obj2,...obj4}
//const obj3 = Object.assign({},obj1,obj2,obj4)

//console.log(obj3);
//assign(target,source1,source2....)--->assigns all the objects of source to target 
//here an empty object is the target and the other objects get added to it and obj3 is assigned.

// we usually get array of objects from databases ...
const users = [

    {
        id:1,
        email : "dibya6148@gmail.com"
    },
    {
    },
    {
    }
]
//console.log(users[0].email);
/*
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
*/
const entry = Object.entries(tinderUser)

//console.log(entry[1]);
/*
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('IsLogged'));
*/

//Destructuring of Objects 

const course ={
    coursename : "js in hindi",
    price: 999,
    courseInstructor : "Hitesh"
}

const {courseInstructor :teacher} =course

//console.log(teacher);

/*JSON 
{
    "name" : "hitesh",
    "coursename" : "js in hindi",
    "price": "free"
}
    */

