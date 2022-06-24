const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name: {type: String, default: ''},
    driveType: {type: String, default: 'AWD'},
    fuelType: {type: String, default: 'gas'},
    transmission: {type: String, default: '6spd auto'},
    mileage: {type: Number, default: 0},
    bodyStyle: {type: String, default: 'sedan'},
    exColor: {type: String, default: 'black'},
    intColor: {type: String, default: 'black'},
    brand: {type: String, default: ''},
    model: {type: String, default: ''},
    subModel: {type: String, default: ''}
})

const car = mongoose.model("Car", carSchema);

module.exports = car;