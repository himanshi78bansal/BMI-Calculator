const value = document.querySelector(".value");
const result = document.querySelector(".result");
const form = document.querySelector(".details");
// select scale class
const fit1 = document.querySelector(".UnderWeight");
const fit2 = document.querySelector(".Healthy");
const fit3 = document.querySelector(".OverWeight");
const fit4 = document.querySelector(".Obese");

form.addEventListener("submit", submit);
form.addEventListener("reset", reset);

// reset function
function reset(e) {
    value.textContent = 0;
    value.style.color = "black";
    result.innerHTML = "N/A";
    fit1.style.backgroundColor = "transparent";
    fit2.style.backgroundColor = "transparent";
    fit3.style.backgroundColor = "transparent";
    fit4.style.backgroundColor = "transparent";
}

// submit function
function submit(e) {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Enter valid values !! ");
        return;
    }
    const heightInMeters = height / 100;
    // calculate bmi
    const bmi = weight / Math.pow(heightInMeters, 2);
    // call color function for result
    const resultColor = bmicolor(bmi);
    // set value
    value.textContent = bmi.toFixed(2);
    // set result
    result.innerHTML = `You are ${resultColor}`;
}

// bmiColor function
function bmicolor(bmi) {
    if (bmi < 18.5) {
        value.style.color = "brown";
        fit1.style.backgroundColor = "brown";
        return "UnderWeight...";
    } else if (bmi < 25) {
        value.style.color = "green";
        fit2.style.backgroundColor = "green";
        return "Healthy...";
    } else if (bmi < 30) {
        value.style.color = "orange";
        fit3.style.backgroundColor = "orange";
        return "OverWeight...";
    } else {
        value.style.color = "red";
        fit4.style.backgroundColor = "red";
        return "Obese...";
    }
}
