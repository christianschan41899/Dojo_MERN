const express = require("express");
const app = express();

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokeRoutes = require('./server/routes/jokes.routes');
AllJokeRoutes(app);

app.listen(8000, () => console.log("The listening on port 8000"));