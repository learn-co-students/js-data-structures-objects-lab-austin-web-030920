const driver = {};

function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({}, driverObject, { [key]: value });
};

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    driverObject[key] = value;
    return driverObject;
};

function deleteFromDriverByKey(driverObject, key) {
    const newObj = Object.assign({}, driverObject);
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromDriverByKey(driverObject, key){
    delete driverObject[key];
    return driverObject;
};