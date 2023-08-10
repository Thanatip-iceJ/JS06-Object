let user = {
    firstName: 'Pavit',
    lastName: 'Pimchanagul',
    age: 18,
    isAdmin : true,
    'like human': true,
}
console.log(user['like human'])

user.firstName = 'Pravit'
user.age = 24
user.age++

console.log(user)

/////////////////////////////////////////

const employee = {
    fullName: 'John Doe',
    salary: 500_000,
    address: {
        district: 'Phayathai',
        province: 'Bangkok',
        country: 'Thailand',
    }
}

console.log(employee)

///////////////////////////

const product = {
    id: 227,
    name: 'Iphone',
    price: 50_000,
    //discount: 0.05,
}

console.log('name' in product)
console.log(product.hasOwnProperty('id'))

console.log(product.price)
console.log(product['price'])