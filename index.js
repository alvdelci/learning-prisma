const express = require("express");
require("dotenv").config();
const routes = require("./routes");

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Server online on port ${port}`);
});
