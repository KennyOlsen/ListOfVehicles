const express = require('express');
const app = express();

//pulls in cors library and allows access across domains
const cors = require("cors");
app.use(cors());

const mongodb = require("./mongo");

const port = 8080;

app.get("/cars", (request, response) => {
    console.log("Get cars");
});

app.get("/car", (request, response) => {
    console.log("Get car");
});

app.post("/car", (request, response) => {
    console.log("Post car");
});

app.delete("/car", (request, response) => {
    console.log("Delete car");
});

app.put("/car", (request, response) => {
    console.log("Put car");
});

app.patch("/car", (request, response) => {
    console.log("Patch car");
});


mongodb.setUpConnectionHandlers(() => {
    //Tells server to start listening
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
mongodb.connect();