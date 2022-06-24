const app = require("./server");

const mongodb = require("./mongo");

const port = 8080;


mongodb.setUpConnectionHandlers(() => {
    //Tells server to start listening
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
mongodb.connect();
