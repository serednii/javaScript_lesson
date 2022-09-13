var david = {
  firstName: "David",
  lastName: "Setek",
  birthYear: true,
  num: 458,
  calculateAge: function (birth) {
    console.log(this.lastName)
    return 2020 - this.birthYear;
  },
  children: {
    firstName: "olga",
    lastName: " mnhbjh",
    calcName: function () {
      return (this.firstName + '  ' + this.lastName);
    }
  }

}

var diana = {
  ...david
}
// var diana = JSON.parse(JSON.stringify(david))
diana.firstName = "serg";
diana.children.firstName = "ira";
david.children.calcName();
console.log(diana.children.uName);
console.log(diana);