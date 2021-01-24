var figlet = require('figlet');
console.log(figlet.textSync('welcome to hangman', {
    font: 'Poison'
}));
const words=['jacket','photo','screen','house','candle']
function game(words) {
        let word=words[Math.floor(Math.random()*words.length)]
        let coverdline=''
        word.split("").forEach(()=>coverdline+='*') 
        let guessLeft=10  
        round(word,guessLeft,coverdline)
    }       
function round(word,guessLeft,line) {
    console.log(`you have ${guessLeft} guesses
    the words is:
    ${line}`);
    const input=require('readline-sync');
    let guess=input.question('whats is your guess?')
    guess=guess.toLowerCase()
    let check1=new RegExp(guess,'i')
    if(!(checkGuess(guess))){
        round(word,guessLeft,line)
    }else{
        if(check1.test(word)){
            line=letterInLine(line,word,guess)
            ;
        }else{
            console.log('worng answer');
            guessLeft-=1 
        }
    }
        if((guessLeft>0)&&(/\*/.test(line))){ 
            round(word,guessLeft,line)
        } else if(!(/\*/.test(line))){
            console.log(figlet.textSync('you won!!', {
                font: 'Roman'
            })) 
        } else {
            console.log(`you are out of attempts,good luck next time(btw the word is: ${word})`) ;
        }
    
}
function checkGuess(guess) {
    if((guess.length>1)||(!(/[a-z]/i.test(guess)))){
        console.log('please enter only one letter in english');
        return false
    }else{
        return true}
}
function letterInLine(line,word,guess) {
    line=line.split("");
    for(let i=0,y=word.length;i<y;i++){
        if(word[i]===guess){
            line[i]=guess
        }
    }
    line=line.join("")
    return line
}
game(words)