const user ={
    username : "Dibyajyoti",
    price : 999, 
    welcomeMessage : function (){
        console.log(`${this.username}, welcome to website `);
    }
}
user.welcomeMessage()
//meaning of this keyword outside the object 
user.username="sam"
user.welcomeMessage()

//console.log(this);