function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function square(){
    let result = input(document.getElementById('display').value);
    let x = display.value;
    if (x != " "){
        let result=x**2;
        display.value = result;
    }

    
}