//Find a unique element in an array.
// Solution 1: using nested loops
function findUniqueElement(arr) {
 for(let i = 0; i < arr.length; i++) {
  let isUnique = true
   for(let j=0; j < arr.length; j++) {
     if(arr[i] === arr[j] && i !== j){
       isUnique = false
       break
     }
   }
       if(isUnique){
         return arr[i]
       }
 }
}

// Solution 2: using indexOf() and lastIndexOf()
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
