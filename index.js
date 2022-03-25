let countEl = document.getElementById("count-el")
let pastCount = document.getElementById("past-counts")

let count = 0

console.log(count)

document.getElementById("count-el").textContent = count

function increment(){
    count++
    countEl.textContent = count
}

function save(){
    pastCount = document.getElementById("past-counts")
    pastCount.textContent = pastCount.textContent + " - " + count
    count = 0
    countEl.textContent = count
}