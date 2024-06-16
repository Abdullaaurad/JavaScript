var x ="ProgrammoPhobia"

function toLowerCaseString(str) {
    return str.toLowerCase();
}

function toUpperCaseString(str) {
    return str.toUpperCase();
}

function splitStringByComma(str) {
    return str.split(',');
}

function indexOfPhobia(str) {
    return str.indexOf('Phobia');
}
  
console.log(toLowerCaseString(x));
console.log(toUpperCaseString(x));
console.log(splitStringByComma("Programmo,Phobia"));
console.log(indexOfPhobia(x));

  