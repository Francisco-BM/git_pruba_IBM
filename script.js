// Variable para almacenar lo que se muestra en pantalla
let displayValue = "";

// Función para agregar un número al display
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

// Función para agregar un operador (+, -, x, /)
function appendOperator(operator) {
    if (displayValue !== "" && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
    }
    updateDisplay();
}

// Función para actualizar la pantalla de la calculadora
function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

// Función para borrar todo el contenido del display
function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

// Función para borrar el último carácter del display
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

// Función para calcular el resultado, reemplazando 'x' por '*'
function calculate() {
    try {
        // Reemplazar 'x' por '*' para que eval() entienda la multiplicación
        displayValue = displayValue.replace(/x/g, '*');
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}
