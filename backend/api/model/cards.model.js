const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/pantagonHeroes", {
  useNewUrlParser: true
});
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  id: String,
  name: String,
  description: String,
  rank: Number,
  image: String,
  classes: String,
  level: String,
  active: Boolean,
  price: Number
});

exports.cards = mongoose.model("cards", cardSchema);
