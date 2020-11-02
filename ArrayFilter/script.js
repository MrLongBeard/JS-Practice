var arr = [1,2,3,4,5,6]
console.log(arr.filter(x => x>2))

Array.prototype.myFilter = function (func) 
{
    let arr = this;
    let val = null;
    let ret = [];
    for (let i=0;i<arr.length;i++)
    {
        val = func(arr[i])
        if(val)
        {
            ret.push(arr[i])
        }
        val = null;
    }
    return ret;
}
console.log(arr.myFilter(x => x>2));

