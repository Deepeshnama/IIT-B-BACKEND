const History = require("../models/history.model")

exports.getHistory = async (req, res) => {
  try {
    const query = req.user.role === "Librarian" ? {} : { user: req.user.id };
    const history = await History.find(query)
      .populate("user", "username")
      .populate("book", "title");
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};