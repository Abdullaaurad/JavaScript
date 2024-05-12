const numberInput = document.getElementById("numberInput");
const output = document.getElementById("output");

numberInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const inputValue = Number(numberInput.value);
        if (!isNaN(inputValue)) {
            const result = inputValue * 5;
            output.textContent = `Result: ${result}`;
        } else {
            output.textContent = "Please enter a valid number.";
        }
    }
});

//! changes after input has been set in and pressed enter 