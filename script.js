// ignore all other operators only focus on value properties 
let A=Math.pow(3,1000) // Math.pow is 3^1000
let B=Math.pow(2,1000)//   Math.pow is 2^1000
if(A===Infinity){
   document.body.innerHTML+='3^1000 is maximum value in javascript <br>'
}//ignore if else it is just if A equal toi infinity print  3^1000 is maximum value in javascript
else{
    document.body.innerHTML+=A+"<br>"
    ;
}
if(B===Infinity){
   document.body.innerHTML+='2^1000 is maximum value in javascript <br>'


    
}
else{
   document.body.innerHTML+=B+'<br>'


}

// undefined 


let m;
if(m===undefined){
    document.body.innerHTML+='m is undefined'
}

console.log(globalThis)
