function produceDrivingRange(range) {
  return function (firstNum, secondNum) {
    let firstInt = parseInt(firstNum.slice(0, firstNum.length - 2), 10);
    let secondInt = parseInt(secondNum.slice(0, secondNum.length - 2), 10);
    let difference = secondInt - firstInt;
    return range > difference ? `within range by ${range - difference}` : `${difference - range} blocks out of range`;
  };
};

function produceTipCalculator(tipAmount) {
  return function (fare) {
    return fare * tipAmount;
  };
};

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name)
    {
      this.name = name;
      this.id = ++driverId;
    }
  };
};
