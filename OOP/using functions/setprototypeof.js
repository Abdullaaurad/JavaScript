let User = {
    active: true
};

let teacher = {
    teach: ["math","science"]
};

Object.setPrototypeOf(teacher,User);

console.log(teacher);
console.log(teacher.active);