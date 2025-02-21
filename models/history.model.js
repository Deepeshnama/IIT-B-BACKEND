const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  book: { type: mongoose.Types.ObjectId, ref: "Book", required: true },
  action: { type: String, enum: ["Borrowed", "Returned"], required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("History", historySchema);
