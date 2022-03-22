function findSmallest(arr){
    let smallest = arr[0]
    let smallest_index = 0
    for(i in arr){
        if (a[i]< smallest){
            smallest = a[i]
            smallest_index = i
        }
    }
    return smallest_index
}
let a = [1,2,3,5,0]
console.log(findSmallest(a))
