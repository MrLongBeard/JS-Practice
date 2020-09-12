const name = {
    firstName: 'Umair',
    lastName: 'Hussain',
    printFullName: function (){
        console.log(this.firstName +" "+ this.lastName)
    }
}
name.printFullName();

let name2 = {
    firstName: 'Rabeea',
    lastName: 'Hussain'
}
//function borrowing
name.printFullName.call(name2)
//////////////////////

let printName = function (hometown, state){
    console.log(this.firstName+ " " + this.lastName+ " from " + hometown + " , " + state)
}
printName.call(name2, "Karachi", "Sindh")
printName.apply(name2, ["Karachi", "Sindh"])

let printMyName = printName.bind(name2, "Karachi", "Sindh")
printMyName()