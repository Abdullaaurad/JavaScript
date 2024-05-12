let position1 = {
    x: 10,
    y: 20,
    MyFunction: function() {
        console.log("Total is =", this.x + this.y);
    }
};

function setx(x) {
    this.x = x; // Use this.x to refer to the object's x property
}

let position2 = Object.assign({}, position1); // Create a new object for position2
console.log("position1 =", position1);
console.log("position2 =", position2);
position2.x = 30; // Modify position2's x property
console.log("new position1 =", position1); // position1's x remains unchanged
position1.MyFunction(); // Outputs: Total is = 30 (10 + 20)
setx.call(position1, 12); // Call setx with position1 as the context
console.log("position1 =", position1); // Outputs: position1 = { x: 12, y: 20, MyFunction: [Function: MyFunction] }

/*The call method is used to explicitly set the value of this within a function when calling it. */

let now = new Date();
console.log(now) 