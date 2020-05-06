// /*
// To return an array of all prime numbers below 1000:
// primeRange(1000);
// */

// function primeRange(max)
// {
//   var max_sqrt = Math.sqrt(max),
//     range = [],
//     current = 0;
  
//   //generate array of numbers
//   for (i = 2; i <= max; i++)
//       range.push(i);
  
//   //filter multiples out
//   while (range[current] <= max_sqrt)
//   {
//       range = range.filter(function(n)
//       {
//           return (n == range[current] || n % range[current] != 0);
//       });
      
//       current++;
//   }
  
//   return console.log(range);
// }
// primeRange(1000);

// our sieve function which will return a list of primes
// up to the limit argument passed
function sieve(limit) {
 
    var bools = [];
    var primes = [];
  
    // generate a list of booleans all set to true initially
    // the array is indexed from 2 to limit representing all numbers
    // e.g. [true, true, true, true] = [2, 3, 4, 5]
    for (var i = 1; i < limit; i++) { bools.push(true); } 
  
    // loop from 2 to limit setting the composite numbers to false
    // we start from 2 because we know 1 is not a prime number
    for (var i = 2; i < limit; i++) {
      if (bools[i-2]) {
        for (var j = i*2; j <= limit; j += i) {
          bools[j-2] = false;    
        }
      }
    }
    
    // now generate the list of primes only where
    // there is a true value in the bools array
    for (var p = 0; p < bools.length; p++) {
      if (bools[p]) { primes.push(p+2); }
    }
    
    return console.log(JSON.stringify(primes));
  } 
  
  sieve(5000);