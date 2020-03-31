


const validateHooverCoords = (hooverCoords, roomDimensions) => {
    if ((hooverCoords.x < 0 || hooverCoords.y < 0) || 
        hooverCoords.x > roomDimensions.x - 1 || hooverCoords.y > roomDimensions.y - 1){
            return {
                message: "Invalid input:\nHoover Coordinates are out of bounds"
            }
        }
    return null
}

module.exports = {
    validateHooverCoords
}