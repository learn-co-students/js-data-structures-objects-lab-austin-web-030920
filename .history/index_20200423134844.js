// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver, { [key]: value })
    return newDriver;
}