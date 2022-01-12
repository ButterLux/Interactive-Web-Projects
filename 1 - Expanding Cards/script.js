const panels = document.querySelectorAll('.panel')
//console.log(panels) // List out all that contains "PANEL"

panels.forEach((panel) => {
    //console.log(panel) //List out each PANEL's info

    panel.addEventListener('click', () => {
        //console.log(123) // make sure that every time a mouse click -> console log 123

        removeActiveClasses()

        panel.classList.add('active') // to add ACTIVE in class to add the CSS animation
    })
})


function removeActiveClasses() {
    // Loop everything and to remove ACTIVE in order to reset
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}