// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
    if (blocks > 40) {
        return blocks - 42
    } else {
        return 42 - blocks
    }
}

function distanceFromHqInFeet (blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet (start, end) {
    if (start < end) {
        return (end - start) * 264
    } else {
        return (start - end) * 264
    }
}

function calculatesFarePrice (start, end) {
    const dis = distanceTravelledInFeet(start, end)

    if (dis < 300) {
        return 0
    } else if (dis > 400 && dis < 2000) {
        return .02 * (dis - 400)
    } else if (dis > 2000 && dis < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}