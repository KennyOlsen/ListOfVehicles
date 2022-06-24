
function templateCreation(car) {
    let driveType = 'AWD';
    let fuelType = 'gas';
    let transmission = 'auto';
    let mileage = 0;
    let bodyStyle = 'sedan';
    let exColor = 'black';
    let intColor = 'black';
    let brand = '';
    let model = '';
    let subModel = '';

    if (!car.driveType) {
        car['driveType'] = driveType;
    }
    if (!car.fuelType) {
        car['fuelType'] = fuelType;
    }
    if (!car.transmission) {
        car['transmission'] = transmission;
    }
    if (!car.mileage) {
        car['mileage'] = mileage;
    }
    if (!car.bodyStyle) {
        car['bodyStyle'] = bodyStyle;
    }
    if (!car.exColor) {
        car['exColor'] = exColor;
    }
    if (!car.intColor) {
        car['intColor'] = intColor;
    }
    if (!car.brand) {
        car['brand'] = brand;
    }
    if (!car.model) {
        car['model'] = model;
    }
    if (!car.subModel) {
        car['subModel'] = subModel;
    }

    return car
}

function post(car) {
    car = templateCreation(car);
    return car;
}


module.exports = {
    post: post
};