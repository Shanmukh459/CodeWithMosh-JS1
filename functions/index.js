function sum(...array) {
  if(array.length === 1 && Array.isArray(array[0])) 
    array = [...array[0]] 
  
  return array.reduce((a, c) => a + c)

}

console.log(sum([1, 2, 3, 4]))