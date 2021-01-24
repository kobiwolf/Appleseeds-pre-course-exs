let answers1=['clothes','black/gray/blue','t-shirts and boxers','many colors and fashions stuff']
let answers2=['Buy a new IPhone','I\'ll go to a resterunt,and save the rest','I need to think about it.. ','Buy a new perfume']
let answers3=['Las-Vegas','ocean','desert','golden castle']
let answers4=['Aston-Martin','Mini-Cooper','Toyota','Mercedes-Bens']
let answers5=['Always te same haircut','Colored my hair to green','always asking for the quickest one','Shaved my hair']
let allAnswer=[answers1,answers2,answers3,answers4,answers5]
let ques1="When you open your closet what do you see?"
let ques2="If you'll won a 2,000$ what will you do?"
let ques3="what's your favorite view?"
let ques4="Pick your car"
let ques5="what's your craziest haircut?"
let allQues=[ques1,ques2,ques3,ques4,ques5]
let logicFunc=function(answer){
    answer=Number(answer)
    if((answer<5)||(answer>-1)){
        switch(answer){
            case 0:
                return 4
            case 1:
                return 2    
            case 2:
                return 1
            case 3:
                return 3  
            case -1:
                return 0        
        }
    }
}
let sum=0
const input=require('readline-sync');
console.log(`   Hello!!!welcome to the quiz!
                This quis will check if you are sloppy or a person who knows the goods in life!
                Enjoy `)

for(let i=0;i<5;i++){
    let answer=input.keyInSelect(allAnswer[i],allQues[i])
    let score=logicFunc(answer)
    sum+=score
    
}
if(sum<6){
    console.log(`       Results:
         You are a slopy,cheap and lazy,You should put more effort`);
}else if(sum<11){
    console.log(`       Results:
         You are ok not more the this,but try a bit more`);
}else if(sum<16){
    console.log((`      Results:
         You better then mosy peoples,If you'll try a bit more you'll be the best`));
}else if(sum<21){
    console.log(`       Results:
         You know how to take care of yourself,You'll sucseed in the business world`);
}
