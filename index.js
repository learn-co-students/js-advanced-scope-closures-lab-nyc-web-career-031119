function produceDrivingRange(blockRange){
  return function(a, b){
    let start = parseInt(a);
    let end = parseInt(b);
    let totalDistance = Math.abs(end-start);
    let travel = blockRange - totalDistance;
    if (travel > 0){
    return `within range by ${travel}`
    }else {
    return `${Math.abs(travel)} blocks out of range`
  }
  }
}

function produceTipCalculator(tip){
  return function(cost){
    return cost * tip
  }
}

function createDriver(){
  let DriverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
