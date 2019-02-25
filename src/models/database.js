const mongoose = require("mongoose");
const URI = "mongodb://localhost/DatabaseMEAN";

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(db => console.log(db.connections[0].db.s.databaseName, " is connected"))
  .catch(err => console.error(err));

module.exports = mongoose;
