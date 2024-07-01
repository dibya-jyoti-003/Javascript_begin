// immediately invoked function expression(iife)
//avoid global pollution 

(()=>{
    console.log(`iife number 1`);
})();

(()=>{
    console.log(`iife number 2`);
})()

// executes as thread
//js is single threadded



