let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Kiah Monpara",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
    }
    console.log(course.tags)

let castle = {
    title: "Live like a king in my castle",
    price: 190,
    isSuperHost: true,
    images: ["img/castle1.png", "img/caste2.png"]
    }
    console.log(castle.price)
    console.log(castle.isSuperHost)


let person={
    name: "Kiah",
    age:19,
    country:"India"
}

function logData(){
    console.log(person.name+" is "+person.age+" years old and lives in "+person.country)
}

let age=60
if (age< 6) {
    console.log("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}


// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("The 5 largest countries in the world:")
// for (let i=0; i < largeCountries.length; i++) {
//     console.log("-" + largeCountries [i])
// }


let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

let dayOfMonth = 13
let weekday = "Tuesday"
if (dayOfMonth === 13 && weekday === "Friday") {
console.log("shock")
}



let fruit=["A","O","A","A","O"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
function sortFruit() {
for (let i=0; i < fruit.length; i++) {
    if (fruit[i] === "A") {
        appleShelf.textContent += "A"
        } 
        else if (fruit[i] === "O")
        {
        orangeShelf.textContent += "O"
        }
    }
}
sortFruit()





const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"
shippingCost = 15
shippingTime = "7-14 days"
const fullPrice = basePrice - discount + shippingCost
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
