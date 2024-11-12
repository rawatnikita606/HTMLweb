let displayValue= '0';
function input(value) {
    const display = document.getElementById('display');
    if (displayValue ==='0'){
        displayValue = value;
    } else {
        displayValue += value;
    }
    display.textContent = displayValue;
}

// let displayValue = '0';

// function input(value) {
//     const display = document.getElementById('display');

//     if (displayValue === '0') {
//         displayValue = value;
//     } else {
//         displayValue += value;
//     }

//     display.textContent = displayValue;
// }
function clearDisplay(){
    displayValue = '0';
    document.getElementById('display').textContent = displayValue;
}

// function clearDisplay() {
//     displayValue = '0';
//     document.getElementById('display').textContent = displayValue;
// }


function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').textContent = displayValue;

    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        displayValue = '0';
    }
}

// function calculate() {
//     try {
//         displayValue = eval(displayValue).toString();
//         document.getElementById('display').textContent = displayValue;
//     } catch (error) {
//         document.getElementById('display').textContent = 'Error';
//         displayValue = '0';
//     }
// }
