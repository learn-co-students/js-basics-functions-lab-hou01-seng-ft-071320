// Code your solution in this file!

function distanceFromHqInBlocks(num) {   
    const blocks = num - 42
    return Math.abs(blocks)
}

function distanceFromHqInFeet(num) {
   let blocks = distanceFromHqInBlocks(num)
   return blocks * 264
}

function distanceTravelledInFeet(num1, num2) {
   let blocks = num1 - num2
   return Math.abs(blocks) * 264
}

function calculatesFarePrice(num1, num2) {
    let distance = distanceTravelledInFeet(num1, num2)
    if (distance <= 400) {
        return 0 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}