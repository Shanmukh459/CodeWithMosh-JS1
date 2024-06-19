let a = 'red'
let b = 'blue'

let temp = a
a = b
b = temp
console.log(a, b)

// Control Flow

// Landscape or potrait
function isLandsscape(width, height) {
  return width > height
}

console.log(isLandsscape(300, 500))

// FizzBuzz

function fizzBuzz(input) {
  if(typeof input !== "number") {
    return "Not a Number"
  }
  if(input % 3 === 0 && input%5 === 0) return "FizzBuzz"
  else if(input % 3 === 0) return "Fizz"
  else if(input % 5 === 0) return "Buzz"
  else return input
}

console.log(fizzBuzz(false))