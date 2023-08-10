let key = ''
let value = ''
const TERMINATE = 'stop'
let fruit = {}

do {
    key = prompt('Enter fruit')
    value = prompt('Enter quantity')

    if(value > 1) {
        key += 's'
    }
    fruit[key] = value;
    
} while(key != TERMINATE || value != TERMINATE)

console.log(fruit)
