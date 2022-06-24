
function templateCreation(car) {
    let driveType = 'AWD';
    let fuelType = 'gas';
    let transmission = '6spd auto';
    let mileage = 0;
    let bodyStyle = 'sedan';
    let exColor = 'black';
    let intColor = 'black';
    let brand = '';
    let model = '';
    let subModel = '';

    if (car.driveType) {
        driveType = car.driveType;
    }
    if (car.fuelType) {
        fuelType = car.fuelType;
    }
    if (car.transmission) {
        transmission = car.transmission;
    }
    if (car.mileage) {
        mileage = car.mileage;
    }
    if (car.bodyStyle) {
        bodyStyle = car.bodyStyle;
    }
    if (car.exColor) {
        exColor = car.exColor;
    }
    if (car.intColor) {
        intColor = car.intColor;
    }
    if (car.brand) {
        brand = car.brand
    }
    if (car.model) {
        model = car.model
    }
    if (car.subModel) {
        subModel = car.subModel;
    }

    return {
        'driveType': driveType,
        'fuelType': fuelType,
        'transmission': transmission,
        'mileage': mileage,
        'bodyStyle': bodyStyle,
        'exColor': exColor,
        'intColor': intColor,
        'brand': brand,
        'model': model,
        'subModel': subModel
    }
}

function post(car) {
    car = templateCreation(car);
    return car;
}


module.exports = {
    post: post
};