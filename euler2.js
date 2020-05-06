// while implementation
function returnFibonaciEvenNumbersSum(ceiling, eulerFirstNum, eulerSecondNum) {
    let sumCounter = 0;
    let eulerNextNumber;
    while(eulerSecondNum <= ceiling){
      eulerNextNumber = eulerSecondNum + eulerFirstNum;
      eulerFirstNum = eulerSecondNum;
      if(eulerSecondNum % 2 === 0) {
        sumCounter += eulerSecondNum;
      }
      eulerSecondNum = eulerNextNumber;
    }
    return console.log(sumCounter);
  }
returnFibonaciEvenNumbersSum(4000000, 0, 1);
