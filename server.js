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
    console.log("get single car ran");
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

app.delete("/car/:id", (request, response) => {
    /*const id = request.params.id;
    console.log("delete car ran");
    Car.findByIdAndDelete(id).then((deletedCar) => {
        if (deletedCar == null) {
            response.status(404).json({message: "not found"});
            return
        }
        //res.json(deletedCar);
    }).catch((err) => {
        response.status(504).json(err);
    });*/



    Car.findById(id).then((car) => {
        if (car == null) {
            response.status(404).json({message: "not found"});
            return
        }
        const deletingCar = json(car);
    }).catch((err) => {
        response.status(500).json(err);
    });


    Todo.findByIdAndDelete(id, deletingCar).then((deletedCar) => {
        if (deletedTodo == null) {
            res.status(404).json({message: "not found"});
            return
        }
        res.json(deletingCar);
    }).catch((err) => {
        res.status(500).json(err);
    });
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