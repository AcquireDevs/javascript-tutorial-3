# JAVASCRIPT

|_Value Properties_|
|---|  
>**There are some value properties you may come with your porgramming journey of javascript**

- **Infinity**

```javascript
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
```
|[see results](https://acquiredevs.github.io/javascript-tutorial-3/)|
|---|

> **In Javascript values around 3 power 1000 is considered as infinity In the above code A will return to infinity and  b will return 1.0715086071862673e+301**
---

- **NaN**
>**In javascript NaN is recognised as not a number . It will target to all strings and arrays . It will be clear in be more clear in next tutorial**
>
>**until you can go with** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN

---

- **Undefined**
>**It practically mean that the variable is declared but never defined:**

```javascript

let m;
if(m===undefined){
    document.body.innerHTML+='m is undefined'
}
```
|[check results](https://acquiredevs.github.io/javascript-tutorial-3/)|
---
- **GlobalThis** 
>**The global globalThis property contains the global this value, which is akin to the global object.**
>
>**Historically, accessing the global object has required different syntax in different JavaScript environments. On the web you can use window, self, or frames - but in Web Workers only self will work. In Node.js none of these work, and you must instead use global.**
>
>**The globalThis property provides a standard way of accessing the global 'this' value (and hence the global object itself) across environments. Unlike similar properties such as window and self, it's guaranteed to work in window and non-window contexts. In this way, you can access the global object in a consistent manner without having to know which environment the code is being run in. To help you remember the name, just remember that in global scope the this value is globalThis.**

```javascript
console.log(globalThis)
```
***your output will be a object in console you can check console by right clicking and then click on inspect***

---


|[next](https://github.com/AcquireDevs/javascript-tutorial-4)|
|---|



