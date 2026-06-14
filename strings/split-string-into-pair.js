// # Split a string into pairs

// Break a string into groups of two characters.
// If the string length is odd, append `_` to the last pair.


// Why `i + 2`?
// `slice(start, end)` returns characters from `start` up to (but not including) `end`.

function solution(str){
  if (str.length % 2 !== 0) {
    str += '_'
  }
   let pairArr = []
   for(let i=0; i<str.length; i += 2){
     pairArr.push(str.slice(i, i + 2))
     }
    return pairArr
}
console.log(solution('abcdefg'));

 // Solution with .padEnd()
// Pads a string with a given character until it reaches the target length.


function solutionWithPad(str2) {
  const result = []

  for (let i = 0; i < str2.length; i += 2) {
    result.push(str2.slice(i, i + 2).padEnd(2, '_'))
  }
  return result
}
console.log(solutionWithPad('aabbccddeeg'));
