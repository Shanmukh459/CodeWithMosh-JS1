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

// moving numbers
const num = [1, 2, 3, 4]
const res = move(num, 3, 0)
console.log(res)

function move(arr, index, offset) {
  if(index+offset >= arr.length || index+offset < 0) return console.error("Invalid offset")
    
  const array = [...arr]
  const ele = array.splice(index, 1)
  array.splice(index + offset, 0, ele[0])
  
  return array
}
