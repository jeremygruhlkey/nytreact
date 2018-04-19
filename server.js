const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/articles.js");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));
app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGOD_URI || "mongodb://localhost/nytreact"
);

app.listen(PORT, () => {
    console.log(`Express server now listening on PORT ${PORT}`)
})

