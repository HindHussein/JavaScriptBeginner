const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;

}

function clearDisplay() {
    display.value = "";
    display.style.color = "gainsboro"; 
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error){
        display.value = "ERROR";
        display.style.color = "red"; 
    }
}