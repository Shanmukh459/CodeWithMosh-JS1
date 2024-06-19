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

// Show even and odd numbers
function showNumbers(limit) {
  for(let i = 0; i <= limit; i++){
    if(i % 2 === 0) console.log(i, "EVEN")
    else console.log(i, 'ODD')
  }
}

showNumbers(10)

// Count Truthy
function countTruthy(array) {
  let count = 0
  for(let a of array) {
    if(a) count++
  }
  console.log(count)
}

countTruthy([0, 1, 2, 4, 5, undefined])

// show string props
function showProperties(obj) {
  for(let key in obj) {
    if(typeof obj[key] === 'string') console.log(key, obj[key])
  }
}

showProperties({title: "abc", profit: 2020})


// sum of multiples of 3 and 5
function sum(limit) {
  let s = 0
  for(let i= 0; i <= limit; i++) {
    if(i%3 === 0 || i%5 === 0) s += i
  }
  console.log(s)
}

sum(10)

// show stars
function showStars(rows) {
  for(let i = 1; i <= rows; i++) {
    let s = ''
    for(let j=0; j<i;j++){
      s += '*'
    }
    console.log(s)
  }
}
showStars(5)

// show primes
function showPrimes(limit) {
  for(let i = 2; i <= limit; i++){
    if(isPrime(i)) console.log(i)
  }
}

function isPrime(number){
    for(let j = 2; j < number ; j++)
      if(number%j === 0) {
        return false
      }
  return true
}
showPrimes(20)