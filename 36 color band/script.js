// Events in Js => https://developer.mozilla.org/en-US/docs/Web/Events
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");
const yellow = document.querySelector(".yellow");

const circular_ramp = document.querySelector(".main-ram")
circular_ramp.style.display


// GET COMPUTED STYLE
// console.log(window.getComputedStyle(blue).background)
// console.log(window.getComputedStyle(red).backgroundColor)


const getBgColor = (colorClassName) => {
    return window.getComputedStyle(colorClassName).backgroundColor;
}
// circular_ramp.innerHTML = color
let changecolor = (ele) =>{
    let color = getBgColor(ele);
    ele.addEventListener("mouseout" ,() => {
        circular_ramp.style.background = "#1f1f1f";
        circular_ramp.innerHTML = ""
    })
    ele.addEventListener('mouseenter' , () =>{
        circular_ramp.style.background = color;
        circular_ramp.innerHTML = color
        
    
    })
}
changecolor(red);
changecolor(green);
changecolor(blue);
changecolor(pink);
changecolor(orange);
changecolor(yellow);
