
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    // prevent form submit
    e.preventDefault();

    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const result = document.querySelector('#results');
    
    if(weight == '' || isNaN(weight) || weight < 0) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    }
    else if (height == '' || isNaN(height) || height < 0) {
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else {
        const bmi = (weight / ((height/100)**2)).toFixed(2);
        const bmiStatus = bmi < 18.5? 'Underweight': bmi < 25? 'Normal': 'Overweight';
        result.innerHTML = `Your BMI is ${bmi} and you are ${bmiStatus}`;
    }
        
})