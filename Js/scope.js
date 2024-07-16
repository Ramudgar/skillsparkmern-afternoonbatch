// functional scope
// block scope
// global scope
// lexical scope
// dynamic scope
// module scope
// const add= (a,b) => a+b;


// functional scope
let num = 10;
function add(a,b){
    let sum = a+b;
    if(sum>10){
        let message = "Sum is greater than 10";
        console.log(message);
        sum=20;
    }
    else{
        let message = "Sum is less than 10";
        console.log(message);
    }
    console.log(sum);
}

add(5,6);




 