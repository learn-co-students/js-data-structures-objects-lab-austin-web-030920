// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, object, key, value) {
    Object.assign({}, object[key] = value)
}