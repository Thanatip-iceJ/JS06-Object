let obj1 = {}

const makeFruit = (obj) => {
    let fruitName = prompt('Enter your fruit name')
    let amount = prompt('For how many?')

    if(amount > 1) fruitName += 's'

    obj[fruitName] = amount;
    console.log(obj)
}