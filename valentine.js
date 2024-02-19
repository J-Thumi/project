const babe = document.querySelector("#yes")
const bodyy = document.querySelector("#ctr")
const heading = document.querySelector("h1")
const body = document.querySelector("body")

var b = document.querySelector("#movingbutton");

var n = 0
let m = 20
var arr = [
    "Such a bitch ass answer",
    "Wanna go for a stargazing soirée?",
    "How about a scientific adventure?",
    "Pussy (in 21 Savage's voice)",
    "Maybe co-pilot in decoding the mysteries of global affairs",
    "Or be my co creater in this artistic symphony of existence",
    "You're gonna die anyway",
    "Maybe create a soundtrack for our adventures?",
    "Or capture the essence of life",
    "Hata ukuwe mtamu aje, huwezi jikula",
    "Let's try this again",
    "Will you be my valentines' date?"
]
var array = [m]
array.push(m+=20)
console.log(array)

function noClicked(){
    heading.innerText = arr[n]
    n++
    if(n > arr.length-1){
        n = 0
    }
    babe.style.fontSize = m + "px"
    m+=20
    babe.style.padding = "20px"
}
function yesClicked(){
    body.style.background = "url(./giphy.gif)"
    body.style.backgroundRepeat = "no-repeat"
    body.style.backgroundSize = "cover"
    heading.innerText = "You are now mine forever!"
    heading.style.fontSize = "100" + "px"
    babe.style.display = "none"
    b.style.display = "none"
}
