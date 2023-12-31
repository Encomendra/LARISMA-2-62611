const express = require("express");
const route = require("./routes/Route");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", route)

app.listen(port, () => console.log(`Server running at port ${port}!`));