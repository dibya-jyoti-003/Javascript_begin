let a = 300

if (true){
    a =10
    const b =20
    //console.log(a);
}

//console.log(a);
//console.log(b);
//console.log(c);

// var is global scope 

function one(){
    const username = "hitesh"

    function two (){
        website = "Youtube"
        console.log(username)
    }
    //console.log(website)
    two()  //without this the function two will not be executed 
}

//one()

if (true){
    const username = "hitesh"

    if (username === "hitesh"){

        const website = "youtube"
        //console.log(username+" "+website);
    }

    //console.log(website);
}
//console.log(username );

console.log(addone(5)) // gives no error as it calls the function ----
function addone (num){
    return num+1
}

console.log(addone(5))

//console.log(addtwo(5))--> variable holding a function cannot be accessed until it is already stored 

const addtwo = function(num){
    return num+2
}

console.log(addtwo(5))

