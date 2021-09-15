//Getting user input
let height = 180 //get user input from 180
let weight = 140 //get user input from 140
let message = ""
let messageSum = ""

//Calculating result
let heightToMetre = height / 100;
let heightTotal = heightToMetre * heightToMetre;
let weightTotal = weight / 2.205;
//formula
let sum = Math.floor(weightTotal / heightTotal)
let total = sum.toFixed(2)

//Check the condition
function calculate() {

    let messageEl = document.getElementById("msgEl")
    let sumEl = document.getElementById("sumEl")

    if (sum < 18.5) {
        sumEl.textContent = "BMI Score : " + sum
        messageEl.textContent = "You are Underweight!"
    } else if (sum >= 18.5 && sum <= 24.9) {
        sumEl.textContent = "BMI Score : " + sum
        messageEl.textContent = "You have Healthy Weight"
    } else if (sum >= 25.0 && sum <= 29.9) {
        sumEl.textContent = "BMI Score : " + sum
        messageEl.textContent = "You are Overweight!"
    } else if (sum > 30.0) {
        sumEl.textContent = "BMI Score : " + sum
        messageEl.textContent = "You are Obese!!"
    }
}
