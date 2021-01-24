const input=require('readline-sync');
let number=input.question('please choose a number');
number=Number(number)
let arr=[]
for(let i=2;i<=number;i++){
        let boolian1=true
        for(num of arr){
            if(i%num===0){
                boolian1=false
                break
            }
        }
        if(boolian1===true){ 
        arr.push(i)};
    }
arr.forEach((num)=>{
    console.log(num);
})