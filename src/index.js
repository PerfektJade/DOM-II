import './less/index.less'

// CREATE 10 EVENT LISTENERS
//
// 1 - load event
window.onload = function (evt) {
    console.log(`Event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'
// 2 - copy event
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })
// 3 - click event
    document.body.addEventListener('click', evt => {
            evt.target.classList.toggle('mirror')
    })
// 4 - dblclick event
    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = ''
    })
// 5 - event
    

}

// 
// 
// USE 'preventDefault'