let buttons = document.querySelectorAll("[value]")
let screen = document.querySelector("input")
let answer = document.querySelector(".answer")
let clear = document.querySelector(".clear")

buttons.forEach(button => {
    button.addEventListener('click',(event)=>{
        screen.value +=(event.target.value);
    })
});

answer.addEventListener('click',()=>{
screen.value = eval(`${screen.value}`)
})

clear.addEventListener('click',()=>{
    screen.value = ''
    })