function produceDrivingRange(blockRange) {
  return function(range1, range2){
    const distance = Math.abs(parseInt(range1) - parseInt(range2))
    const evaluate =  blockRange - distance
    if (evaluate > 0){
      return `within range by ${evaluate}`
    } else{
      return `${Math.abs(evaluate)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(price){
    return price * tipPercent
  }
}

function createDriver() {
  let id = 0;
    return class{
      constructor(name, manufacturePrice) {
        this.name = name;
        this.id = id++;
      }
    }
  }
