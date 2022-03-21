function binary_search(list, item){
    let low = 0
    let high = list.length-1
    while(low<=high){
        let mid = (low+high)/2
        let guess = list[mid]
        if(guess === item){
            return mid
        }else{
            if(guess< item){
                low = mid +1
            }else{
                high = mid-1
            }
        }
    }

}
let r = [1,2,3]
console.log(binary_search(r,6))
