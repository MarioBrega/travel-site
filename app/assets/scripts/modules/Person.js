class Person() {
  constructor(a,b) {
    this.name = a;
    this.antani = b;
  }

  greet() {
    console.log("test")
  }
}

module.exports = Person;

console.log("hello from person.js")
