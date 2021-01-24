const input=require('readline-sync');
let a=input.question('Please write a string,please use only english letters')
let arr=a.split(" ")
let max=arr[0].length
let maxWordNumber=0
for(let i=1;i<arr.length;i++){
    let check=true
    for(letter of arr[i]){
       if(!(/[a-z]/gi.test(letter))){
         check=false
        }
    }if(!check){
        console.log("I know you wrote something besied letters!");;
    }
       if((arr[i].length>max)&&(check)){
         max=arr[i].length
         maxWordNumber=i       
    }
}
console.log(`Your longest word is ${arr[maxWordNumber]}`);
