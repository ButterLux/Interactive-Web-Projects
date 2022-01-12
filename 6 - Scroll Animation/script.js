const boxes = document.querySelectorAll('.box') // put in array node list

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //console.log(window.innerHeight / 5 * 4) // 745
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}