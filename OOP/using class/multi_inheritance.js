/*
class A{
    constructor(x){
        this.x=x;
    }
}

class B extends A{
    constructor(x,y){
        this.y=y;
        super(x);
    }
}

class C extends B,A{
    constructor(x,y){
        this.y=y;
        super(x);
    }
}*/ //!Can't do this in js like in C++

// Define mixin classes with constructor methods
class MixinA {
    constructor(x) {
      this.x = x;
    }
  }
  
class MixinB {
    constructor(y) {
      this.y = y;
    }
}

class C {
    constructor(x, y) {
      this.mixinA = new MixinA(x);
      this.mixinB = new MixinB(y);
    }
}

[MixinA, MixinB].forEach(baseClass => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
      C.prototype[name] = baseClass.prototype[name];
    });
})

const objC = new C(10, 20);
console.log(objC.mixinA.x); // Output: 10
console.log(objC.mixinB.y); // Output: 20
  