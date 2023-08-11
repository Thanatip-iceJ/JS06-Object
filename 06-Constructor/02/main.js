function Accumulator() {
    this.currentValue = 0;

    this.read = function() {
        this.currentValue += +prompt('Enter a number')
    }

    this.show = function() {
        alert(this.currentValue)
    }
}

let newObj = new Accumulator()

console.log(newObj)
newObj.read()
newObj.show()