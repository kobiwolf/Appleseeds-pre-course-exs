function newArr(num) {
    let arr=[];
    for(let i=0;i<num;i++){ 
        arr.push(Math.ceil(Math.random()*50))
    }
    return arr
}
function minMax(arr) {
    let min=arr[0];
    let max=arr[0];
    arr.forEach((cell)=>{
        if(cell>max){
            max=cell;
            }
        if(cell<min){
            min=cell
            }
        }
    );
        return `your min is:${min} ,and your max is:${max}`
}
