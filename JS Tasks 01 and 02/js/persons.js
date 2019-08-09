class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return `Name: ${this.name}, Age: ${this.age}`
    }

    eat() {
        return "I am eating some snacks"
    }

    talk() {
        return "Hello Boss! Be funny guy and smile, please! :)"
    }
}

class Man extends Human {
    constructor(name, age, testosteroneLevel, beardSize) {
        super(name, age);
        this.testosteroneLevel = testosteroneLevel;
        this.beardSize = beardSize;
    }

    shaveBeard() {
        return "I shave my beard with my stick - Gillette 3"
    }

    peeStanding() {
        return "I am peeing at the urinal, standing upright"
    }
}

class Woman extends Human {
    constructor(name, age, estrogenLevel, titsSize) {
        super(name, age);
        this.estrogenLevel = estrogenLevel;
        this.titsSize = titsSize;
    }

    makeBounce() {
        return "I make bounce with my tits at this very sexy song"
    }

    giveBirth() {
        return "I give birth! I will become a mother!"
    }
}

let sisi = new Woman("Silvia", 24, 101, 100)
let emi = new Woman("Emilia", 24, 101, 100)
let kire = new Man("Kiril", 25, 200, 1)
let rado = new Man("Rodrigo", 34, 150, 2)
