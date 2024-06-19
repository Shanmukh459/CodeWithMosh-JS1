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