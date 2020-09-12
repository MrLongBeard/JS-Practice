let name = {
    firstName: 'Umair',
    lastName: 'Hussain'
}

let printFullName = function (hometown, state){
    console.log(this.firstName+ " " + this.lastName+ " from " +hometown+ ", "+state)
}

let print = printFullName.bind(name,"karachi")
print("sindh");

Function.prototype.myBind = function (...args){
    let obj = this;
    params = args.slice(1)
    return function (...args2){
        obj.apply(args[0],[...params,...args2])
    }
}

let printBind = printFullName.myBind(name,"karachi")
printBind("sindh");
