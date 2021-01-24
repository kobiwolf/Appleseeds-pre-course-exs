let func=function()
    { 
    const input=require('readline-sync');
    let num=input.question('Choose a number')
    let num2=input.question('Choose another number')
    if(Number(num)+Number(num2)===10){
        console.log("makes 10");
    }else{
        console.log("nope");
    }
    }
func()
