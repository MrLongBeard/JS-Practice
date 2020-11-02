// const name = {
//     firstName: 'Umair',
//     lastName: 'Hussain',
//     printFullName: function (){
//         console.log(this.firstName +" "+ this.lastName)
//     }
// }
// name.printFullName();

let name2 = {
    firstName: 'Rabeea',
    lastName: 'Hussain'
}
//function borrowing
// name.printFullName.call(name2)
//////////////////////

let printName = function (hometown, state){
    console.log(this.firstName+ " " + this.lastName+ " from " + hometown + " , " + state)
}
// printName.call(name2, "Karachi", "Sindh")
// printName.apply(name2, ["Karachi", "Sindh"])

let printMyName = printName.bind(name2, "Karachi", "Sindh")
// printMyName()

/// call apply bind example

let obj ={
    name:'Umair',
    getName:function(){
        console.log(`this is ${this.name}`)
    }
}
obj.getName();

//as Math.max only accepts list of number, how to find max number from array
let numbers = [1,2,3,4,5,6];
console.log(Math.max.apply(null, numbers))