function calculate() {

    //Getting user input
    let height = document.getElementById("inputHeight").value
    let weight = document.getElementById("inputWeight").value

    let messageEl = document.getElementById("msgEl")
    let sumEl = document.getElementById("sumEl")

    //Calculating result
    let heightToMetre = height / 100;
    let heightTotal = heightToMetre * heightToMetre;
    let weightTotal = weight / 2.205;
    //formula
    let sum = Math.floor(weightTotal / heightTotal)

    //Check the condition
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
