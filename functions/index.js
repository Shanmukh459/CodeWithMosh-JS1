function sum(...array) {
  if(array.length === 1 && Array.isArray(array[0])) 
    array = [...array[0]] 
  
  return array.reduce((a, c) => a + c)

}

console.log(sum([1, 2, 3, 4]))

// Area of circle
const circle = {
  radius: 2,
  get area() {
    return Math.round(Math.PI * Math.pow(this.radius, 2))
  }
}
console.log(circle.area)

// countOccurences with try catch
const newArray = [1, 2, 3, 4, 5, 1, 4, 4]
try{
  console.log(countOccurences(true, 4))
} catch(e) {
  console.log(e)
}

function countOccurences(array, searchElement) {
  if(!Array.isArray(array)){
    throw new Error('Invalid array')
    
  }
  const count = array.reduce((accumulator, currentValue) => {
    if(currentValue === searchElement) accumulator++
    return accumulator
  }, 0)
  return count
}
