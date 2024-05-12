const submitButton = document.getElementsByClassName("submitButton")[0];

submitButton.addEventListener("click", function() {
    const inputElement = document.getElementsByClassName("textInput")[0];
    const userInput = 5*inputElement.value;
    output.textContent = `Result: ${userInput}`;
});
