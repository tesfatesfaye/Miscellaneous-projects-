console.log(__dirname)
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log(__filename)
    }
    greeting(){

        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}

module.exports=Person;