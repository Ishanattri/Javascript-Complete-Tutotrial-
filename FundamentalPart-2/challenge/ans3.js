const mark = {
    fullName: 'Mark Miller',
    mass: 80,
    height: 1.80,
    calcBMI: function(){
        return this.mass / (this.height ** 2)
    }
}

const john = {
    fullName: 'John Singh',
    mass: 90,
    height: 1.78,
    calcBMI: function(){
        return this.mass / (this.height ** 2)
    }
}

const checkHigherBMI = mark.calcBMI() > john.calcBMI() ? `Mark BMI ${mark.calcBMI()} is higher than John BMI ${john.calcBMI()}`: `John BMI ${john.calcBMI()} is higher than Mark BMI ${mark.calcBMI()}`
console.log(checkHigherBMI)