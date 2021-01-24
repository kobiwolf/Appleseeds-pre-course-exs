function reveres(arr) { 
    for(let i=0;i<arr.length;i++){
        arr.push(arr[arr.length-1-i])  
        arr.splice(i,1)
    }
    return arr
}
let arr=[1,2,3]
let arr1=reveres(arr)
console.log(arr1);
console.log(arr.reverse());

