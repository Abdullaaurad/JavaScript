const numberInput = document.getElementById("numberInput");
const submitButton = document.getElementById("submitButton");

function handleClick() {
    const inputValue = Number(numberInput.value);
    if (!isNaN(inputValue)) {
        const result = inputValue * 5;
        output.textContent = `Result: ${result}`;
    } else {
        output.textContent = "Please enter a valid number.";
    }
}

submitButton.addEventListener("click", handleClick);
