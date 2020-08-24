// Code your solution in this file!

function distanceFromHqInBlocks(block){
    let block_dist = Math.abs(42 - block);
    return block_dist;
}

function distanceFromHqInFeet(block){
    let foot_distance = distanceFromHqInBlocks(block) * 264;
    return foot_distance;
}

function distanceTravelledInFeet(block1, block2){
    let feet_travelled = Math.abs((block1 - block2) * 264);
    return feet_travelled;
}

function calculatesFarePrice(block1, block2){
    let distance_travelled = distanceTravelledInFeet(block1, block2);
    let price;
    if (distance_travelled <=400){
        price = 0
    }else if (distance_travelled > 400 && distance_travelled <=2000){
        price = .02 * (distance_travelled - 400);
    }else if (distance_travelled > 2000 && distance_travelled <=2500){
            price = 25;
    }else if (distance_travelled > 2500){
            price = 'cannot travel that far';
    }
    return price;
}

