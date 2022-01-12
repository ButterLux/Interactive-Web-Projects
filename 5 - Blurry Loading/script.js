const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }
    console.log(load)

    loadText.innerText= `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //loadText.style.opacity = 1 - (load / 100); // Simpler Option

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

    // let filterBlur = 30
    // filterBlur -= 0.3;
    // bg.style.filter = `blur(${filterBlur}px)`; // Simpler Option
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

