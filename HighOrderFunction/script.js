function highOrderFunction(arr, fn){
    let output=[]
    for(let i=0;i<arr.length;i++)
    {
        output.push(fn(arr[i]))
    }
    return output
}

const arr = [1,2,3]
function multiplyby2(x){ return x*2 }
const multiplyby2Arrow = x => x*2
const result = highOrderFunction(arr, multiplyby2)
const resultArrow = highOrderFunction(arr, multiplyby2Arrow)
const resultArrowParam = highOrderFunction(arr, x=>x*2)
console.log(result)
console.log(resultArrow)
console.log(resultArrowParam)