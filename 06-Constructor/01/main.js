function Calculator() {
    this.read = function() {
        this.num1 = prompt('Enter number1')
        this.num2 = prompt('Enter number2')
    }
    this.sum = function() {return +this.num1 + +this.num2}
    this.mul = function() {return +this.num1 * +this.num2}
}

let calc = new Calculator()
calc.read()
calc.sum()
calc.mul()

