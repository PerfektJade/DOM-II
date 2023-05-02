import './less/index.less'

// CREATE 10 EVENT LISTENERS
//
// 1 - load
window.onload = function (evt) {
    console.log(`Event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'
// 2 - copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })
// 3 - click
    document.body.addEventListener('click', evt => {
            evt.target.classList.toggle('mirror')
    })
// 4 - dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })
// 5 - keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
        }
    })
// 6 - mousemove
    document.body.addEventListener('mousemove', evt => {
        const {clientX, clientY} = evt
        console.log(`Mouse is at ${clientX}, ${clientY}`)
    })
// 7 - 
// 8 - 
// 9 - 
// 10 - 
}

// 
// 
// USE 'preventDefault'