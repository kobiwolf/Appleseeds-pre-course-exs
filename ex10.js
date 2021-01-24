const input=require('readline-sync');
let sent=input.question('please write a sentence');
let newSent=sent.replace(/ /g,'*')
console.log(newSent);