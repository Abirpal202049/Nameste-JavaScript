// Using Query selector

let counter = document.querySelector(".counter")
let followers = document.querySelector(".followers")

let count = 1;


setInterval(() => {
    if(count <= 900){
        counter.innerHTML = count;
        count++
    }
}, 1);

setInterval(() => {
    if(count <= 980){
        counter.innerHTML = count;
        count++
    }
}, 100);

setInterval(() => {
    if(count <= 1000){
        counter.innerHTML = count;
        count++
    }
    setTimeout(() => {
        if(count == 1001){
            followers.innerHTML = "Followers on Instagram!"
        }
    }, 4500);
    
}, 500);