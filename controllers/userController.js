const User = require("../models/user.model")
const History = require("../models/history.model")

exports.getAllMembers = async (req, res) => {
  try {
    const members = await User.find({ role: 'Member' });
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMember = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
      
    if (!updatedMember)
          return res.status(404).json({ error: "Member not found" });
      
    res.json({ message: "Member updated successfully", member: updatedMember });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMemberHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const history = await History.find({ user: id }).populate("book", "title");
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const history = await History.findByIdAndDelete(id)
    res.status(200).json("Deleted succesfully")
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteOwnAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    await User.findByIdAndUpdate(userId, { isActive: false });
    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};