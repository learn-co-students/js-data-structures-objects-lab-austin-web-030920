// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver, { [key]: value })
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    
}