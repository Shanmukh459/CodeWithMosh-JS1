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

// exclude or except
const output = except(n, [2])
console.log(output)

function except(array, excluded) {
  let out = []
  for(let a of array) {
    if(!excluded.includes(a)) out.push(a)
  }
return out
}
