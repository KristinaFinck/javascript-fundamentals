// map takes each value and replaces it with
//  the corresponding symbol from the table
const fruitsFromLookUpTable = {
  apple: "🍎",
  banana: "🍌",
  cherry: "🍒"
}
const fruits = ["apple", "cherry", "banana"]
const result = fruits.map(fruit => fruitsFromLookUpTable[fruit])
console.log(result) 
//[ '🍎', '🍒', '🍌' ]

//We can use switch case for it:
const animals = [ "deer", "cat", "fox"]

const animalResult = animals.map(animal => {
  switch (animal) {
    case "cat":
      return "🐈"
    case "fox":
      return "🦊"
    case "deer":
      return "🦌"
  }
})

console.log(animalResult)
// [ '🦌', '🐈', '🦊' ]