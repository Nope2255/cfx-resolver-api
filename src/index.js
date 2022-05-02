const express = require("express");
const cors = require("cors");
const app = express();

const resolve = require('./routes/resolve.routes');

app.use(cors());
app.use(express.json());

app.use('/v1/resolve', resolve);

app.listen(8080);