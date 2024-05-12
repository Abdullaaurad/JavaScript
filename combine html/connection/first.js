document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    const submitButton = document.getElementById("submitButton");
    const output = document.getElementById("output");

    submitButton.addEventListener("click", function() {
        // Get the value entered by the user
        const inputValue = Number(numberInput.value);
        
        // Check if the input is a valid number
        if (!isNaN(inputValue)) {
            // Multiply the input by 5
            const result = inputValue * 5;
            
            // Display the result
            output.textContent = `Result: ${result}`;
        } else {
            output.textContent = "Please enter a valid number.";
        }
    });
});
