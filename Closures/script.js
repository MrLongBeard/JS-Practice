// problem that closure solves in javaScript is LEXICAL SCOPING
// LEXICAL SCOPING:
// variables that are defined outside the scope is also available inside of scope
// E.G
let i = 0;
const func = ()=>{
    console.log('i: ',i)
}
func()
////////////////////////////////////////////
//clousre example
let f = ()=>{
    let i =2;
    let j =3;
    return () => {
        console.log(i);
        console.log(j);
    }
}
f()();
//output
// 2
// 3
//////////////////////////////////////////////
// closure with for loop
for(let i =0; i<3; i++){
    setTimeout(()=>{
        console.log('forloop with let: ',i)
    },1000);
}
for(var k =0; k<3; k++){
    setTimeout(()=>{
        console.log('forloop with var: ',k)
    },1000);
}
//how to fix var issue that prints 3 everytime
for(var l =0; l<3; l++){
    ((l)=>{
        setTimeout(()=>{
        console.log('forloop with var: ',l)
        },1000)
    })(l)
}

//when you have a function to find inside of another function 
//like this that inner function has access to the variables and 
//scope of the outer function even if the outer function finishes 
//executing and those variables are no longer accessible outside that function

function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('outerVariable: ', outerVariable)
        console.log('innerVariable: ', innerVariable)
    }
}

const newFuntion = outerFunction('outside')
newFuntion('inside')
//result
//outside
//inside

// counter clock example
var add = (()=>{
    var counter = 0;
    return ()=>{counter+=1; return counter}
})()
console.log(add())
console.log(add())
console.log(add())
//counter clock example another way
var plus = ()=>{
    var counter=0;
    return ()=>{
        counter+=1;
        return counter
    }
}
var myCounter=plus()
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())


//The Hard Parts: Functional Programming Fundamentals
//currying
//partial application 
//function decoration techniques
//if Hemingway wrote javascript
//helper functions
//Iterators and generators
//module patterns