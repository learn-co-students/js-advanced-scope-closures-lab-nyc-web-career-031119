function produceDrivingRange(blockRange) {
  return function(arg1, arg2) {
    arg1 = arg1.replace(/\D/g,'')
    arg1 = Number(arg1)
    arg2 = arg2.replace(/\D/g,'')
    arg2 = Number(arg2)

    let range = arg2 - arg1;
    let inRange = blockRange - range;
    let outOfRange = range - blockRange

    if (range <= blockRange) {
      return `within range by ${inRange}`;
    } else {
      return `${outOfRange} blocks out of range`;
    };
  }
}

function produceTipCalculator(percent) {
    return function(fare) {
      return fare * percent;
    }
}

function createDriver() {
  let id = 0;

  return class Driver {
    constructor(name, id) {
      this.name = name;
      this.id = ++id;
    }
  }
}
