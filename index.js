function produceDrivingRange(range) {
  return function (str1, str2) {
    distance = Math.abs(str1.split("th")[0] - str2.split("th")[0]);
     return distance < range ? `within range by ${range - distance}` : `${distance - range} blocks out of range`;
  };
}

function produceTipCalculator(tipPercentage) {
  return function (fare) {
    return fare * tipPercentage;
  };
};

function createDriver() {
  let driverId = 0;

  return class Driver {
    constructor(name, hometown) {
      this.name = name;
      this.hometown = hometown;
      this.id = ++driverId;
    }
  };
}
