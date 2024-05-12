function getNumber() {
    var numStr = prompt("Enter a number:");
    var num = parseInt(numStr);
    var resultElement = document.getElementById("result");
    resultElement.textContent = "You entered: " + num;
}
