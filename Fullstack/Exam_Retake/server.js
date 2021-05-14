const express = require('express');
const cors = require('cors');
const app = express();

require("./server/config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors()) 

const ReviewSiteRoutes = require('./server/routes/reviewSite.routes');
ReviewSiteRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})