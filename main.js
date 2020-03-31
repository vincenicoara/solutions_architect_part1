const utils = require('./utilities/utils.js')
const roomHelper = require('./helpers/roomHelper')
const inputValidator = require('./validators/inputValidator')

const main = (argv) => { 
    const filename = utils.getFileName(argv)
    if (!filename){
        console.log("File does not exist in /input folder")
        return
    }

    const inputLines = utils.getInputLines('./input/' + filename)
    const roomDimensions = roomHelper.getRoomDimensions(inputLines)
    const hooverCoords = roomHelper.getHooverCoords(inputLines)

    const error = inputValidator.validateHooverCoords(hooverCoords, roomDimensions)
    if (error){
        console.log(error.message)
        return
    }

    const {matrix, drivingDirections} = roomHelper.initializeRoomAndDirections(inputLines, roomDimensions)
    const {hoover, particlesCleaned} = roomHelper.cleanRoom(matrix, roomDimensions, hooverCoords, drivingDirections)
    console.log(hoover.x, hoover.y)
    console.log(particlesCleaned)
}

main(process.argv)

