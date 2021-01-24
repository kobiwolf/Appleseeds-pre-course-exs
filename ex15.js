function joinArrs(arr,arr1) {
    arr.forEach(cell => {
        arr1.push(cell)
    });
}
let a=['hey','you']
let b=['what is up']
joinArrs(b,a)
console.log(a);