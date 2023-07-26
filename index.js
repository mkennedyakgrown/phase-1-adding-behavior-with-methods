// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak = () => {
        console.log(`${this.name} says meow!`);
        return `${this.name} says meow!`;
    };
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak = () => {
        console.log(`${this.name} says woof!`);
        return `${this.name} says woof!`;
    };
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak = () => {
        if (this.sex === 'male') {
            console.log(`It's me! ${this.name}, the parrot!`);
            return `It's me! ${this.name}, the parrot!`;
        } else {
            console.log(`${this.name} says squawk!`);
            return `${this.name} says squawk!`;
        }
    };
}