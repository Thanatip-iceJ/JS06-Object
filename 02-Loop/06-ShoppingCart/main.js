let name = prompt('Enter a product name')
let amount = prompt('How many?')
let price = prompt('Enter the price')
let discount = prompt('Enter % of discount')

// if(discount === 0) {
//     delete discount;
// }

let product = {name, amount, price, discount}

const truePrice = obj => {
    let finalPrice = 0
    if(+obj[discount == 0]) delete obj.discount;
    if (!'discount' in obj) {
        finalPrice += (+obj[price] * +obj[amount])
    } else {
        finalPrice += (+obj[price] * +obj[amount]) - (+obj[discount] / 10)
    }
    return finalPrice;
}

