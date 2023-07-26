// Your code here
class Cat {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak = () => {
        console.log(`${name} says meow!`);
        return `${name} says meow!`;
    };
}

class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak = () => {
        console.log(`${name} says woof!`);
        return `${name} says woof!`;
    };
}

class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    };

    speak = () => {
        if (this.sex === 'male') {
            console.log(`It's me! ${name}, the parrot!`);
            return `It's me! ${name}, the parrot!`;
        } else {
            console.log(`${name} says squawk!`);
            return `${name} says squawk!`;
        }
    };
}
