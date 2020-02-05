const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
const port = process.env.PORT || 3111;

const api = require("./api/api");
app.use("/", api);

app.listen(port, () => console.log(`Listening on port ${port}`));

