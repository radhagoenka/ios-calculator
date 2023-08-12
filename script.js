
// operators

let clear = document.querySelector(".clear")
let plusMinus = document.querySelector(".plusMinus")
let percentt = document.querySelector(".percent")
let divid = document.querySelector(".divide")
let multy = document.querySelector(".multiple")
let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let equal = document.querySelector(".equal")

// digits
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let dot = document.querySelector(".dot")

// area
let inputArea=document.querySelector("textarea")


// code 
let i=""
one.addEventListener("click",()=>{
    i+= `1`
    inputArea.innerHTML = i
})
two.addEventListener("click",()=>{
    i+=`2`
    inputArea.innerHTML =i
})
three.addEventListener("click",()=>{
    i+=`3`
    inputArea.innerHTML =i
})
four.addEventListener("click",()=>{
    i+=`4`
    inputArea.innerHTML =i
})
five.addEventListener("click",()=>{
    i+=`5`
    inputArea.innerHTML =i
})
six.addEventListener("click",()=>{
    i+=`6`
    inputArea.innerHTML =i
})
seven.addEventListener("click",()=>{
    i+=`7`
    inputArea.innerHTML =i
})
eight.addEventListener("click",()=>{
    i+=`8`
    inputArea.innerHTML =i
})
nine.addEventListener("click",()=>{
    i+=`9`
    inputArea.innerHTML =i
})
zero.addEventListener("click",()=>{
    i+=`0`
    inputArea.innerHTML =i
}) 
dot.addEventListener("click",()=>{
    i+=`.`
    inputArea.innerHTML =i
})
plus.addEventListener("click",()=>{
    i+=`+`
    inputArea.innerHTML =i
})
minus.addEventListener("click",()=>{
    i+=`-`
    inputArea.innerHTML =i
})
multy.addEventListener("click",()=>{
    i+=`*`
    inputArea.innerHTML =i
})
divid.addEventListener("click",()=>{
    i+=`/`
    inputArea.innerHTML =i
})
percentt.addEventListener("click",()=>{
    i+=`%`
    inputArea.innerHTML =i
})
// plusMinus.addEventListener("click",()=>{
//     i+=`=/-`
//     inputArea.innerHTML =i
// })
clear.addEventListener("click",()=>{
    i=``
    inputArea.innerHTML =i
})
equal.addEventListener("click",()=>{
    i=eval(i)
    inputArea.innerHTML =i
})