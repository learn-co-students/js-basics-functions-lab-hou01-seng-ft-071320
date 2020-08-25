// Code your solution in this file!

function distanceFromHqInBlocks(blocks){
    let result
    if (blocks > 42) {
        result = blocks - 42
    } else {
        result = 42 - blocks
    }
    return result
}

function distanceFromHqInFeet(feet){
    let result
    result = distanceFromHqInBlocks(feet) * 264
    return result
}

function distanceTravelledInFeet(start_block, end_block){
    let result
    if (start_block > end_block){
       result = (start_block - end_block) * 264
    } else {
        result = (end_block - start_block) * 264
    }
    return result
}

function calculatesFarePrice(start, destination){
    const travelled = distanceTravelledInFeet(start,destination)
    let result
    if (travelled <= 400){
        result = 0
    } else if (travelled > 400 && travelled <= 2000){ 
        result = .02 * (travelled - 400)
    } else if (travelled > 2000 && travelled <= 2500){
        result = 25
    } else {
        result = 'cannot travel that far'
    }
    return result
}