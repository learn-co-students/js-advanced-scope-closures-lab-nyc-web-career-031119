function produceDrivingRange(range) {
  return function(a, b) {
    let distance = Math.abs(a.split("th")[0] - b.split("th")[0])
    return distance < range ? `within range by ${range - distance}` : `${distance - range} blocks out of range` ;
  }
}

function produceTipCalculator(total) {
  return function (percent) {
    return total * percent;
  }
}

function createDriver() {
  // set an id to equal zero
  let DriverId = 0;
  // return a class that gives a driver a new id
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }   
  }
}
