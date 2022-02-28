
const calcAverage = (x,y,z) =>{
    const average = (x+y+z)/3
    return average
}

let avgDolphin = calcAverage(44,23,71)
let avgKolas = calcAverage(65,54,49)

const checkWinner = (avgDolphin, avgKolas) =>{
    if (avgDolphin >= 2*avgKolas){
        console.log(`Dolphin wins ${avgDolphin} vs ${avgKolas}`)
    }
    else{
        console.log(`Kolas wins ${avgKolas} vs ${avgDolphin}`)
    }
}

checkWinner(avgDolphin, avgKolas)
