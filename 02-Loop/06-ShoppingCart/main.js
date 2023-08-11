let name = prompt('Enter a product name')
let amount = prompt('How many?')
let price = prompt('Enter the price')
let discount = prompt('Enter % of discount')

// if(discount === 0) {
//     delete discount;
// }

let product = {name, amount, price, discount}
// let product2 = {name: 'pc', amount: 5, price: 200, discount: 0}

const truePrice = obj => {
    let finalPrice = 0
    if(+obj['discount'] == undefined  || obj['discount'] <= 0) {
        delete obj['discount']
    }
    if (!obj['discount']){
        finalPrice = (+obj['price'] * +obj['amount'])
    } else {
        finalPrice = (+obj['price'] * +obj['amount']) * (1-(+obj['discount'] / 100))
    }
    return finalPrice;
}
console.log(product.discount)
truePrice(product)



