// function retailPriceMaker(manufacturePrice) {
//   return function(marketMultiplier) {
//     return marketMultiplier * manufacturePrice;
//   };
// }

function produceDrivingRange(num) {
  return function (str1, str2) {
    let start = parseInt(str1);
    let end = parseInt(str2);
    let dist = Math.abs(start - end);
    let diff = num - dist;

    if (diff > 0) {
      return `within range by ${diff}`
    } else {
      return `${Math.abs(diff)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function (fare) {
    return fare * percent;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
