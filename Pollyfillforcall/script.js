function CheckThis (name){
    this.firstName = name
}
CheckThis.prototype.checking = function (){
    (function (){
        console.log(this.firstName)
    }.bind(this))()
    
}
this.firstName = 'hussain'
CheckThis.prototype.checkingArrow = function(){
    (()=>{console.log(this.firstName)})()

}
CheckThis.prototype.checkingArrow2 = ()=>{
    console.log(this.firstName)
}
const check = new CheckThis('umair')
check.checking()
check.checkingArrow()
check.checkingArrow2()
const x ={}
console.log(x)
x.name = 'umair'
console.log(x)
