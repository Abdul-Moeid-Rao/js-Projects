const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const weight = parseInt(document.querySelector('#weight').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#result');

    if(weight < 0 || weight === '' || isNaN(weight)){
       result.innerHTML = `Invalid Input....${weight}`;
    }
    else if(height < 0 || height === '' || isNaN(height)){
       result.innerHTML = `Invalid Input....${height}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let bmiStatus = '';

        if(bmi < 17) {
            bmiStatus = 'Underweight';
        } else if(bmi >= 17 && bmi <= 25) {
            bmiStatus = 'Normal';
        } else {
            bmiStatus = 'Overweight';
        }

        result.innerHTML = `BMI = <span>${bmi}</span> (${bmiStatus})`;
    }
})