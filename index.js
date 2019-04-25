function produceDrivingRange(blockRange) {
  return function(startString, finishString) {
    let start = parseInt(startString);
    let finish = parseInt(finishString);
    let distance = Math.abs(finish - start);
    let difference = blockRange - distance
    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function (price) {
    return price * percent;
  }
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId
    }
  }
}
