const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes"); // Make sure routes.js is in the same directory

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
