const utils = require('../utilities/utils.js')

const getRoomDimensions = (inputLines) => {
    const dimens = inputLines[0].split(' ')
    return {
        x: parseInt(dimens[0]),
        y: parseInt(dimens[1])
    }
}

const getHooverCoords = (inputLines) => {
    const coords = inputLines[1].split(' ')
    return {
        x: parseInt(coords[0]),
        y: parseInt(coords[1])
    }
}

//Returns index of line that has driving instructions
const initializeRoomAndDirections = (inputLines, roomDimensions) => {
    var matrix = utils.createMatrix(roomDimensions)
    var drivingDirections
    for (var i = 2; i < inputLines.length; i++){
        if (utils.isAlpha(inputLines[i][0])){
            drivingDirections = inputLines[i]
            break
        }
        const spec = inputLines[i].split(' ')
        const x = spec[0], y = roomDimensions.y-1-spec[1]
        matrix[y][x] = '*'
    }
    return {
        matrix,
        drivingDirections
    }
}

const cleanRoom = (matrix, roomDimensions, hoover, drivingDirections) => {
    const go = {
        'N': [-1,0],
        'S': [1,0],
        'W': [0,-1],
        'E': [0,1]
    }

    var particlesCleaned = 0
    for (var i = 0; i < drivingDirections.length; i++){
        if (matrix[hoover.y][hoover.x] == '*'){
            matrix[hoover.y][hoover.x] = null
            particlesCleaned++
        }
        const direction = go[drivingDirections.charAt(i)]

        var nextX = hoover.x + parseInt(direction[1])
        var nextY = hoover.y + parseInt(direction[0])

        // If we are out of bounds, do not move and check next letter. 
        if (nextX < 0 || nextY < 0 || nextX >= roomDimensions.y || nextY >= roomDimensions.x){
            continue
        }

        hoover.x = nextX
        hoover.y = nextY
    }
    //Adjusting Y dimension since grid is flipped in the y direction. 
    hoover.y = roomDimensions.y-1-hoover.y

    return {
        hoover,
        particlesCleaned
    }

}

module.exports = {
    cleanRoom,
    initializeRoomAndDirections,
    getRoomDimensions,
    getHooverCoords,
}