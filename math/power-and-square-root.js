//Given a number, 
// if its square root is an integer, 
// return the square of the next integer. 
// Otherwise, return -1.
//Ex.121 → √121 = 11 → (11 + 1)² = 144

function findNextSquare(sq) {
  let root = Math.sqrt(sq) // Math.sqrt() returns the square root of a number
  if(Number.isInteger(root)){  // Number.isInteger() checks if a number is an integer
 return Math.pow(root + 1, 2);  // Math.pow(base, exponent) raises a number to a given power
  }
  
  return -1;
}
console.log(findNextSquare(144)) //169
