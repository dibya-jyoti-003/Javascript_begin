function sayMyName (){
    console.log ("Hello Dibyajyoti Karmakar ")
}

//sayMyName()

function add (n1,n2){

    let n3 = n1+n2
    return n3;
}

const result = add(47,84)

//console.log("Result : ",result);

function loginUserMessage(username = "sam"){                    //giving a default value if no argument is passed 
    if (!username ){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in `
}

//console.log(loginUserMessage(" "))

//lets suppose we dont know how many parameters we are going to get in the function 

function calculateCartPrice(num1){
    console.log(num1);
    return num1;
}

function calculateCartPrice2(...num1){               // rest and spread operator -> ...(three dots)
    console.log(num1);
    return num1;
}
/*
calculateCartPrice(2,5,8,9)
calculateCartPrice2(2,5,8,9)
calculateCartPrice2(2,5,8,9,45,14)*/

const user ={
    username : "hitesh",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

//we can also pass dirct object to the function 

const newArr = [200,45,787,1554,451]

function secValue(arr){
    if (arr.length<2){
        return `Number of elements less than two`
    }
    return arr[1]
}

//console.log(secValue(newArr))

