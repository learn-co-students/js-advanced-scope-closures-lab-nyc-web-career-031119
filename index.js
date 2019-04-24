function produceDrivingRange(range) {
  return function(st1, st2) {
    const distance = Math.abs(parseInt(st1) - parseInt(st2));
    const comparison = range - distance;
    if (comparison > 0) {
      return `within range by ${comparison}`;
    } else {
      return `${Math.abs(comparison)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage
  }
}

function createDriver() {
  let DriverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
