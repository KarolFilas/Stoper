const div = document.querySelector('.time div')
const btnStart = document.querySelector('button.main')
const btnReset = document.querySelector('button.reset')

//better solution

let time = 0
let active = false
let idInterval

const timer = () => {
    if (!active) {
        active = !active
        btnStart.textContent = 'Pauza'
        idInterval = setInterval(start, 10)
    } else {
        active = !active
        btnStart.textContent = 'Start'
        clearInterval(idInterval)
    }
}

const start = () => {
    time++
    div.textContent = (time / 100).toFixed(2)
}

const reset = () => {
    time = 0
    div.textContent = '---'
    active = false
    btnStart.textContent = 'Start'
    clearInterval(idInterval)
}

btnReset.addEventListener('click', reset)
btnStart.addEventListener('click', timer)

// let startTime = Math.floor(new Date().getTime() / 10)
// let sec = 0
// let inter

// function stoper() {
//     let endTime = Math.floor(new Date().getTime() / 10)
//     let x = endTime - startTime
//     div.textContent = `${sec}.${x}`
//     if (x < 10) {
//         div.textContent = `${sec}.0${x}`
//     }
//     if (x >= 99) {
//         sec++
//         endTime = Math.floor(new Date().getTime() / 10)
//         startTime = Math.floor(new Date().getTime() / 10)
//     }
// }


// const startStoper = () => {
//     if (btnStart.textContent === 'Start') {
//         inter = setInterval(stoper, 10)
//         btnStart.textContent = 'Pauza'
//     } else if (btnStart.textContent === 'Pauza') {
//         btnStart.textContent = 'Start'
//         clearInterval(inter)
//     }
// }

// const resetStoper = () => {
//     clearInterval(inter)
//     div.textContent = '---'
//     btnStart.textContent = 'Start'
//     startTime = Math.floor(new Date().getTime() / 10)
//     sec = 0
// }


// btnReset.addEventListener('click', resetStoper)
// btnStart.addEventListener('click', startStoper)