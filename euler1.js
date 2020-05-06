/**
 * Find the sum of all the multiples of firstNum or secondNum below a ceilingNum.
 * @param {firstNum} 
 * @param {secondNum} 
 * @param {ceilingNum}
 * @returns {log}
 */

function returnMultipleSum(firstNum, secondNum, ceilingNum) {
  let counter = 0;
  for (let i = 0 ; i < ceilingNum; i++) {
    if (i % firstNum === 0) {
      counter += i
      console.log(`${i} was divisible by ${firstNum}`);
    } else if(i % secondNum === 0) {
      counter += i
      console.log(`${i} was divisible by ${secondNum}`);
    } else (console.log(`${i} was not divisible by ${firstNum} or ${secondNum}`));
  }
  return console.log(`the sum of all numbers is ${counter}`)
}
returnMultipleSum(3,5, 10000);
