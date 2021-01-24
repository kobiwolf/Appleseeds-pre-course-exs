const input=require('readline-sync');
let number=input.question('please choose a number larger then');
let finalNumber=1
for(let i=1;i<=number;i++){
    finalNumber*=i
}
console.log(finalNumber);