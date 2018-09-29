module.exports = function getZerosCount(number, base) {
  const primeFactorsArray = findPrimeFactors(base);
  let resultZerosCount = 0;
  const arLength = primeFactorsArray.length;
  if (arLength === 1) {
    resultZerosCount = findPrimesZerosCount(number, base);
   } else {
    let divisor = 1;
    let primesZerosCount;
      for (let i = 0; i < arLength; i++) {
        if (primeFactorsArray[i] === primeFactorsArray[i-1]) {
          divisor++;
        } else {
          divisor = 1;
        }
        if (divisor !== 1) {
          primesZerosCount = Math.floor(findPrimesZerosCount (number, primeFactorsArray[i]) / divisor);
        } else {
          primesZerosCount = findPrimesZerosCount (number, primeFactorsArray[i]);
        }
        if (i === 0){
          resultZerosCount = primesZerosCount;
        } else {
          resultZerosCount = Math.min(primesZerosCount, resultZerosCount);
        }
      }
    }
    return resultZerosCount;
  }

function findPrimeFactors(number) {
  let primeFactors = [];
  for (let i = 2; i <= number; i++) {
    while ((number % i) === 0) {
      primeFactors.push(i);
      number = number / i;
    }
  }
  return primeFactors;
}

function findPrimesZerosCount(number, base) {
  let count = 0;
  for (let i = base; number/i >= 1; i = i * base){ 
    count = count + Math.floor(number/i);
  }
  return count; 
}