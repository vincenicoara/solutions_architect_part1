const utils = require('../utilities/utils')

test('Should return true for char', () => {
    expect(utils.isAlpha('A')).toBe(true)
})
test('Should return false for number', () => {
    expect(utils.isAlpha('2')).toBe(false)
})