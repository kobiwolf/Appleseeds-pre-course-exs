function Game() {
    console.log('welcome to game of war!!!');
    const input=require('readline-sync');
    let name=input.question('what\'s your name?')
    console.log(`welcome to the game ${name} currently you have 50 ISL`);
    const firstAmount=50
    const answers=['I\'ll leave with my money','sure why not?']
    let amount=round(firstAmount)
    do{ 
        if(amount===false){
            console.log("I told you to place a vaild bet!.goodbye!");
        }
        else if(amount>0){
            let answer=input.keyInSelect(answers, null, {cancel: false},`your amount is ${amount} would you like another round?`);
            if(answer===0){
                amount=false 
                console.log('Chicken');
            }else{
                amount=round(amount)
            }
        }
    }while((amount!==false)&&(amount>0))
    if(amount===0){
        console.log(`you\'ve lost all of your money better luck next time!`);
        }
}
function round(sumMoney) {
    const input=require('readline-sync');
    let Bet=input.question(`place a vaild bet between 1-${sumMoney}`);
    Bet=Number(Bet)
    if(!(checkNum(Bet,sumMoney))){
        return false
    }
   let userCard=Math.ceil(Math.random()*12);
   let cumpCard=Math.ceil(Math.random()*12);
   console.log(`your card is:${userCard} and my card is:${cumpCard}`);
   if(userCard>cumpCard){
       console.log('you won the round');
       sumMoney+=Bet
   }else{
       console.log('you lost the round');
       sumMoney-=Bet
   }
   return sumMoney
}
function checkNum(bet,sumMoney) {
    bet-=0
    if((!(isNaN(bet))&&(bet<=sumMoney)&&(bet>0))){ 
        return(true)}
    else{
        return false}    
}
Game()
