const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to USER API." });
});

require("./app/routes/user.routes.js")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port: "+PORT);
});