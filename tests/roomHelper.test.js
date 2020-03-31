const roomHelper = require('../helpers/roomHelper')
const utils = require('../utilities/utils.js')

const inputLines = utils.getInputLines('./tests/input/input.txt')

test('Hoover dimensions are correct', () => {
    expect(roomHelper.getHooverCoords(inputLines)).toStrictEqual({
        x: 1,
        y: 2
    })
})

test('Room dimensions are correct', () => {
    expect(roomHelper.getRoomDimensions(inputLines)).toStrictEqual({
        x: 5,
        y: 5
    })
})

test('Specs on the room are correctly set', () => {
    const roomDimensions = roomHelper.getRoomDimensions(inputLines)
    // const hooverCoords = roomHelper.getHooverCoords(inputLines)

    var {matrix} = roomHelper.initializeRoomAndDirections(inputLines, roomDimensions)
    expect(matrix[1][2]).toBe('*')
    expect(matrix[2][2]).toBe('*')
    expect(matrix[4][1]).toBe('*')
    expect(matrix[0][2]).toBe(undefined)
})

//Note: This tests the directions going out of bounds in the east direction. 
test('Correct driving directions are sent', () => {
    const roomDimensions = roomHelper.getRoomDimensions(inputLines)
    // const hooverCoords = roomHelper.getHooverCoords(inputLines)
    var {drivingDirections} = roomHelper.initializeRoomAndDirections(inputLines, roomDimensions)
    expect(drivingDirections).toBe('NNESEEEEEESWNWW')  
})

test('Hoover has ended up in the correct position and it has collected the correct amount of particles', () => {
    const roomDimensions = roomHelper.getRoomDimensions(inputLines)
    const hooverCoords = roomHelper.getHooverCoords(inputLines)
    var matrix = utils.createMatrix(roomDimensions.x, roomDimensions.y)
    var {matrix, drivingDirections} = roomHelper.initializeRoomAndDirections(inputLines, roomDimensions)

    const res = roomHelper.cleanRoom(matrix, roomDimensions, hooverCoords, drivingDirections)
    expect(res).toStrictEqual({
        hoover: {
            x: 1,
            y: 3
        },
        particlesCleaned: 1
    })
})
 