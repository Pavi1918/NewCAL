// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last digit
function deleteDigit() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

// Append a value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Calculate the result
function calculate() {
    let display = document.getElementById('display').value;
    display = display.replace('^', '**'); // Replace power operator with JS power operator
    display = display.replace('pi', 'Math.PI'); // Replace pi with Math.PI

    try {
        // Evaluate using math functions
        document.getElementById('display').value = eval(display
            .replace('sin', 'Math.sin')
            .replace('cos', 'Math.cos')
            .replace('tan', 'Math.tan')
            .replace('log', 'Math.log')
            .replace('exp', 'Math.exp')
            .replace('sqrt', 'Math.sqrt')
        );
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

// Toggle between Normal and Scientific Calculator
function toggleCalculator() {
    var scientific = document.getElementById("scientific-calculator");
    var button = document.getElementById("toggle-btn");

    if (scientific.style.display === "none") {
        scientific.style.display = "block";
        button.textContent = "Switch to Normal";
    } else {
        scientific.style.display = "none";
        button.textContent = "Switch to Scientific";
    }
}
