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

// Speed Limit
function checkSpeed(speed) {
  if(speed <= 74) return 'Ok'
  const extraSpeed = speed - 70
  const points = Math.floor(extraSpeed/5)
  if(points > 12) {
    return "Your License in suspended"
  }
  return points
}

console.log(checkSpeed(5))