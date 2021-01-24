const input=require('readline-sync');
let intel=input.question('Choose a number or a word')
let booli=true
let forLength
if(intel.length%2===0){
    forLength=intel.length/2-1
}else{
    forLength=Math.floor(intel.length/2)
}
console.log(forLength);
for(let i=0;i<=forLength;i++){
    if(intel[i]!==intel[intel.length-i-1]){
        booli=false
    }
}
if(booli===true){
    console.log('your string is a palindrome string');
}else{
    console.log('your string isn\'t a palindrome string');
}