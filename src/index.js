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
        // console.log(`Mouse is at ${clientX}, ${clientY}`)
    })
// 7 & 8 - mouseenter & mouseleave
    const destinations = document.querySelectorAll('.destination')
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }
// USE 'preventDefault'
// 9 - wheel
    function zoom(evt) {
        evt.preventDefault();
        scale += evt.deltaY * -0.01;
        scale = Math.min(Math.max(0.125, scale), 4);
        el.style.transform = `scale(${scale})`;
    }
    let scale = 1;
    const el = document.querySelector('img');
    el.onwheel = zoom;
// 10 - mouseover
    const btns = document.querySelectorAll('.btn');
    for (let btn of btns) {
        btn.addEventListener('mouseover', () => {
            btn.style.color = 'orange';
            setTimeout(() => {
                btn.style.color = ''
            }, 500);
        }, false);
    };
};