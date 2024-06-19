const numbers = arrayFromRange(1, 10)

console.log(numbers)
function arrayFromRange(min, max) {
  const n = []
  for(let i = min; i <= max; i++){
    n.push(i)
  }
  return n
}

const n = [1, 2, 3, 4]
// Includes
function includes(array, searchElement) {
  for(a of array) {
    if(a === searchElement) return true
  }
  return false
}

console.log(includes(n, 2))