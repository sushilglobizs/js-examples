<!DOCTYPE html>
<html>
<body>
<script>
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
  // get today's date and time
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
let ageDifference = myCar.age();
console.log("Age difference: " + ageDifference);
</script>

</body>
</html>
