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

// constructor function
function Address(street, city, zipCode) {
  this.street = street
  this.city = city
  this.zipCode = zipCode
}

const another = new Address("1", "2", "3")
console.log(another)

// areEqual and areSame
const address1 = new Address('a', 'b', 'c')
const address2 = new Address('a', 'b', 'c')

function areEqual(address1, address2) {
  for(key in address1){
    if(address1[key] !== address2[key]) return false
  }
  return true
}

function areSame(address1, address2) {
  return address1 === address2
}

console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))

// Blog Post
const post = {
  title: "abc",
  body: "a body of post",
  author: "xyz",
  views: 30,
  comments: [
    {
    author: "pqr",
    body: "body of a comment"
    }
  ],
  isLive: true
}
console.log(post)

function Post(title, body, author) {
  this.title = title
  this.body = body
  this.author = author
  this.views = 0
  this.comments = []
  this.isLive = false
}

const anotherPost = new Post('a', 'b', 'c')
console.log(anotherPost)
