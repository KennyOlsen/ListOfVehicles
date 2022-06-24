const express = require('express');
const app = express();

//pulls in cors library and allows access across domains
const cors = require("cors");
app.use(cors());

//Pulls in body-parser so requests aren't undefined
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({extended: true}))

const Car = require("./car");


app.get("/cars", (request, response) => {
    console.log("get todos ran");
    Car.find().then((cars) => {
        response.json(cars);
    }).catch((err) => {
        response.status(500).json(err);
    });
});

app.get("/car/:id", (request, response) => {
    //takes id from directive to use
    const id = request.params.id;
    console.log("get single todo ran");
    Car.findById(id).then((car) => {
        if (car == null) {
            response.status(404).json({message: "not found"});
            return
        }
        response.json(car);
    }).catch((err) => {
        response.status(500).json(err);
    });
});

app.post("/car", (request, response) => {
    console.log("Post car");
    Car.create(request.body).then((car) => {
        response.json(car);
    }).catch((err) => {
        response.status(500).json(err);
    });
});

app.delete("/car", (request, response) => {
    console.log("Delete car");
    response.send("Delete car");
});

app.put("/car", (request, response) => {
    console.log("Put car");
    response.send("Put car");
});

app.patch("/car", (request, response) => {
    console.log("Patch car");
    response.send("Patch car");
});

module.exports = app;