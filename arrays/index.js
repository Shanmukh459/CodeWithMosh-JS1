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

// countOccurences
const newArray = [1, 2, 3, 4, 5, 1, 4, 4]
console.log(countOccurences(newArray, 4))

function countOccurences(array, searchElement) {
  const count = array.reduce((accumulator, currentValue) => {
    if(currentValue === searchElement) accumulator++
    return accumulator
  }, 0)
  return count
}

// find max element
const newArray1 = [1, 2, 4, 5, 6, 8]
console.log(getMax(newArray1))

function getMax(array) {
  if(array.length === 0) return undefined
  return array.reduce((acc, cur) => acc > cur ? acc : cur)
}

// Movies
const movies = [
  {title: 'a', year: 2018, rating: 4.5},
  {title: 'b', year: 2018, rating: 4.7},
  {title: 'c', year: 2018, rating: 3},
  {title: 'd', year: 2017, rating: 4.5}
]

const titles = movies
  .filter(m => m.year === 2018 && m.rating > 4)
  .sort((a, b) => b.rating - a.rating)
  .map(m => m.title)
console.log(titles)
