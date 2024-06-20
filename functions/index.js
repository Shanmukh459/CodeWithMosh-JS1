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
