const address = {
  street: "5th",
  city: "San Jose",
  zipCode: "25"
}

function showAddress(address) {
  for(key in address){
    console.log(key, address[key])
  }
}

showAddress(address)

// constructor function
function Address(street, city, zipCode) {
  this.street = street
  this.city = city
  this.zipCode = zipCode
}

const another = new Address("1", "2", "3")
console.log(another)

// Factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  }
}
const factoryAdd = createAddress("a", "b", "c")
console.log(factoryAdd)