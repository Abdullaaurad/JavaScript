const numberInput = document.getElementById("numberInput");
const output = document.getElementById("output");

numberInput.addEventListener("change", function() {
    const inputValue = Number(numberInput.value);
    if (!isNaN(inputValue)) {
        const result = inputValue * 5;
        output.textContent = `Result: ${result}`;
    } else {
        output.textContent = "Please enter a valid number.";
    }
});

//! changes after entering the input and navigating out of it