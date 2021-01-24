const input=require('readline-sync');
let num=input.question('How many people are you going with?')
num=Number(num)
let myError = new Error('stop execution');
if(isNaN(num)){   
    throw myError;
}
let kosherAnswer=input.question('Should it be Kosher?(y/n answer)');
if((kosherAnswer!=='y')&&(kosherAnswer!=='n')){
    throw myError;
}
if(kosherAnswer==='y'){
    let MehadrinAnswer=input.question('If it is Kosher, should it be Kashrut Lemehadrin?(y/n question)')
    if((MehadrinAnswer!=='y')&&(MehadrinAnswer!=='n')){
        throw myError;   
    }
}
let arr=["spicy","chinese","sushi","meat","street food"]
let foodKind=input.keyInSelect(arr,'What kind of food do you want?')