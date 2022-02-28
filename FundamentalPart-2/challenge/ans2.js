let bills  = [125,555,44]


function calcTip (billValue){
    let tip = billValue>=50 && billValue<=300 ? billValue * (15/100) : billValue*(20/100)
    return tip
}
calcTip(bills)
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(bills)
console.log(tips)
console.log(total)


