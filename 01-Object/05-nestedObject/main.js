const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
        }
    }
};

let product2 = {}

// product2.distributor = {address: {province: 'Nonthaburian'}}

console.log(product1.distributor.address.province)  
console.log(product2.distributor?.address.province)  


