const fs = require('fs')

const getFileName = (argv) => {
    if (argv.length == 3){
        filename = argv[2]
    } else {
        filename = 'input.txt'
    }
    if (fs.existsSync('./input/' + filename)){
        return filename
    }
    return null
}

const getInputLines = (filepath) => {
    return fs.readFileSync(filepath).toString().split('\n')
}
const createMatrix = (roomDimensions) => {
    const matrix = Array.from(Array(roomDimensions.x), 
        () => Array.from(Array(roomDimensions.y)))
    return matrix
}
const isAlpha = (ch) => {
    return /^[A-Z]$/i.test(ch);
}

module.exports = {
    getInputLines,
    createMatrix,
    isAlpha,
    getFileName
}