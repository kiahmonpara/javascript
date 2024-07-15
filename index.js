

// intialize the count as 0
let count=0

// listen for clicks on the increment button
let countEl= document.getElementById("count-el")
let saveEl=document.getElementById("save-el")


console.log(saveEl)
// increment the count variable when the button is clicked 
function increment(){
    count=count+1
    countEl.textContent=count
}
// change the count-el in the HTML to reflect the new count

function save(){
    let pre= count + " - "
    saveEl.textContent+= pre
    countEl.textContent=0
    count=0
}


