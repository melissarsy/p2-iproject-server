const express = require("express");
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3000
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});