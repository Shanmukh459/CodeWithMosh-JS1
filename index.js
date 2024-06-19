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

isLandsscape(300, 500)