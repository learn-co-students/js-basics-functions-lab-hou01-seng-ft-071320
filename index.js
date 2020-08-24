// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let distance = Math.abs(block - 42)
    return distance
}

function distanceFromHqInFeet(block) {
   return distanceFromHqInBlocks(block)*264
}

function distanceTravelledInFeet(block1,block2) {
    let distance = Math.abs(block1-block2)*264
    return distance
}

function calculatesFarePrice(start, destination) {
    let distanceCharged = distanceTravelledInFeet(start,destination) - 400;
    let result;
    switch (true) {
        case distanceCharged <= 0 :
            result = 0;
            break;
        case distanceCharged > 0 && distanceCharged < 1600:
            result = distanceCharged * 2/100;
            break;
        case distanceCharged > 2100: 
            result = 'cannot travel that far';
            break; 
        case distanceCharged > 1600:
            result = 25;
            break;
    }
    return result
}