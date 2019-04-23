function produceDrivingRange(range){
  return function(string1,string2){
    num1 = string1.slice(0,-2);
    num2 = string2.slice(0,-2);
    let distance = Math.abs(num1-num2);
    if (distance > range){
      return `${Math.abs(distance-range)} blocks out of range`
    } else {
      return `within range by ${Math.abs(distance - range)}`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage
  }
}

function createDriver(){
  let driverId = 0
  return class{
    constructor(name){
      this.name = name;
      this.id = driverId++;
    }
  }
}
