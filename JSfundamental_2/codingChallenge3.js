const markr = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calc: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.bmi();

const john = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
}
