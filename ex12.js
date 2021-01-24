const input=require('readline-sync');
let text=input.question('write a sentence')
text=text.replace(/a/g,"A")
text=text.replace(/e/g,"E")
text=text.replace(/i/g,"I")
text=text.replace(/o/g,"O")
text=text.replace(/u/g,"U")
text=text.replace(/y/g,"Y")
console.log(text);
