"use strict"
const container = document.querySelector(".container");

let size = 20


// some inbuilt event listeners in js
// the same element can have two or more event-listeners attatched to it
container.addEventListener('click', (e) => {
    container.style.setProperty('--border-radius', (size += size) + 'px')
})

// double click
container.addEventListener('dblclick', (e) => {
    let inner = document.createElement('div')
    inner.classList.add("inner")
    container.appendChild(inner)

})

// Custom Event Listeners
const myevent = new Event('myevent')  //define

container.addEventListener('myevent', (e) => {  // add listener
    container.style.backgroundColor = "#333"
}, false)

container.dispatchEvent(myevent);  //dispatch

// Promises 
const mypromise = new Promise((resolve, reject) => {
    let success = true
    setTimeout(() => {
        if (success) {
            resolve('Fetch Was a total Success')
        }
        reject('Something Unexpected Happened')
    }, 2000)
})

// if the promise is resolved the color of the container is green

mypromise.then(message => {
    container.style.backgroundColor = "#7FFFD4"
    console.log(message)
}).catch(message => {
    container.style.backgroundColor = "#FF4E00"
    console.log(message)
})

const item = 6
console.log(6 + " hello")  // 6 hello

console.log(typeof item)  //number

const modified = item + " "

console.log(typeof modified)  //string
console.log(modified) //6

let ans = (modified / 5).toFixed(3) // 1.200
console.log(ans)
console.log(typeof ans) //string

console.log(typeof (parseInt(ans))) // number


let a = 5
let b = 71
console.log(typeof (a / b).toFixed(5))






