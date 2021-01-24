const input=require('readline-sync');
let number=input.question('please choose a number LARGER than 10');
number=parseInt(number)
while(!(number>10)){   
    number=input.question('please choose a number LARGER than 10');
    number=Number(number)
}

console.log('Thank you.');