// Anagrams become identical after:
// toLowerCase() -> split('') -> sort() -> join('')
// write the function isAnagram
var isAnagram = function(test, original) {
  if (test.length !== original.length) {
  return false
}
   let sortedOriginal = original.toLowerCase().split('').sort().join('')
   let sortedTest = test.toLowerCase().split('').sort().join('')
   
   if(sortedOriginal === sortedTest){
     return true
   }
  return false
};

// one line solution
function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}
