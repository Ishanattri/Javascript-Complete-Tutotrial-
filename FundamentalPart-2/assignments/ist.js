///////////// LECTURE : FUNCTIONS /////////////////////

function describeCountry(country, population, capital){
    return `${country} has ${population} million population and it's capital city is ${capital} `
}

const data1 = describeCountry()
const data2 = describeCountry()
const data3 = describeCountry()

console.log(data1,data2,data3)



///////////////////// LECTURE: Arrow Functions ////////////////////

const percentageOfWorld3 = (country, population, capital) =>{
    return `${country} has ${population} million population and it's capital city is ${capital} `
}

const sample1 = percentageOfWorld3()
const sample1 = percentageOfWorld3()
const sample1 = percentageOfWorld3()