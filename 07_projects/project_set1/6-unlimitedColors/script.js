
let interval = null;
document.getElementById("start").addEventListener("click", (e) => {
    if(!interval) {
        interval = setInterval( changebackground, 1000);
    }
}, false);

function changebackground(){
    const hex = "0123456789ABCDEF";
    color = '#';
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
}

document.getElementById("stop").addEventListener("click", (e) => {
    clearInterval(interval);
    interval = null;
}, false);
