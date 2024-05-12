const str = "Hello, world!";
console.log(str.length);
const str2 = "Hello";
console.log(str2[0]);
console.log(str2[1]);
const str1 = "Hello";
const str3 = "world";
const combinedStr = str1 + ", " + str3 + "!";
console.log(combinedStr);
const str4 = "JavaScript";
const subStr = str4.substring(0, 4);
console.log(subStr); // Output: "Java"
const str5 = "JavaScript";
const subStr2 = str5.slice(4, -1);
console.log(subStr2); // Output: "Script"
const str6 = "Hello, world!";
const replacedStr = str6.replace("world", "JavaScript");
console.log(replacedStr); // Output: "Hello, JavaScript!"
const str7 = "Hello, world!";
console.log(str7.toUpperCase()); // Output: "HELLO, WORLD!"
console.log(str7.toLowerCase()); // Output: "hello, world!"
const str8 = "apple,banana,orange";
const fruits = str8.split(",");
console.log(fruits); // Output: ["apple", "banana", "orange"]
const str9 = "   Hello, world!   ";
console.log(str9.trim()); // Output: "Hello, world!"
const str10 = "Hello, world!";
console.log(str10.search("world")); // Output: 7
console.log(str10.indexOf("world")); // Output: 7
