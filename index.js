
// const name1 = prompt('What is your Name?');
// const height = prompt('whats your height?');
// const country = prompt('Where are you from?');


// document.write(name1 + " " + height + " "+ country);
// console.log(country);
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//funtion that does the counting
function increment() {
    count += 1
    countEl.textContent = count
}
//function that save after counting and reset everything back to 0
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


        
