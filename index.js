function produceDrivingRange(num){
  return function(str1, str2){
    num1 = str1.slice(0, -2);
    num2 = str2.slice(0, -2);
    distance = Math.abs(num1 - num2) - num
    if (distance < 0){
      return `within range by ${Math.abs(distance)}`
    } else {
      return `${Math.abs(distance)} blocks out of range`
    }
  }
}

function produceTipCalculator(num){
  return function(fare){
    return num * fare;
  }
}

function createDriver(){
  let id = 0
  
  return Driver = function(name) {
    this.name = name;
    this.id = id++;
  }

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = id++;
    }
  }
}
