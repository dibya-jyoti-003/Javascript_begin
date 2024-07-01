const user ={
    username : "Dibyajyoti",
    price : 999, 
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website `);
    }
}
/*user.welcomeMessage()
//meaning of this keyword outside the object 
user.username="sam"
user.welcomeMessage()

console.log(this);*/

/*function temp (){
    let user = "dibya"
    console.log(this.user);
}

temp()*/

const temp =() => {
    let user = "dibya"
    console.log(this);
    console.log(this.user);
}
temp()

const add =(n1,n2) => {     // explicit return 
    return n1+n2
}

const add2 =(n1,n2) => n1+n2 // implicit return 

console.log(add(2,5))
console.log(add2(2,5))

//to return an object we always need to enclose it in curly braces
