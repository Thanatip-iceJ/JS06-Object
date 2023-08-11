function Developer(name, age){
    this.name = name;
    this.age = age;
    this.role = 'dev'
    this.salary = 40_000
    this.dev = function() {console.log('i develop some features')}
}

const dev2 = new Developer('iceJ', 25)

console.log(dev2)
dev2.dev()