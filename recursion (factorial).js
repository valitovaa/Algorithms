1)
function fact(x){
    if(x===1){
        return 1
    }else{
        return x * fact(x-1)
    }
}
console.log(fact(3))
2)
function sum(arr){
    let total = 0
    for(i in arr){
        total+=arr[i]
    }
    return total
}
//recursion

function recSum(arr){
    if(arr === []){
        return arr
    }else{
        let i = arr.shift()
        return i + sum(arr)
    }
}
let a = [2,2,3,8]
console.log(recSum(a))
