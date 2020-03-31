const inputValidator = require('../validators/inputValidator')

test('Should return error because hoover is out of bounds', () => {
    const hooverCoords = {
        x: -1,
        y: 4
    }
    const roomDimensions = {
        x: 10,
        y: 6
    }
    const result = {
        message: "Invalid input:\nHoover Coordinates are out of bounds"
    }
    expect(inputValidator.validateHooverCoords(hooverCoords, roomDimensions)).toStrictEqual(result)
})

test('Should return null because input is valid', () => {
    const hooverCoords = {
        x: 2,
        y: 4
    }
    const roomDimensions = {
        x: 3,
        y: 9
    }
    expect(inputValidator.validateHooverCoords(hooverCoords, roomDimensions)).toBe(null)
})