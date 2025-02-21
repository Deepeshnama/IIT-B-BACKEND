const express = require("express")
const { autheticateJWT, authorizeRole } = require("../middlewares/authMiddleware")
const { getAllMembers, updateMember, deleteMember, getMemberHistory, deleteOwnAccount } = require("../controllers/userController")

const router = express.Router()

router.get("/", autheticateJWT, authorizeRole("Librarian"), getAllMembers)
router.put("/:id", autheticateJWT, authorizeRole("Librarian"), updateMember)
router.delete("/:id", autheticateJWT, authorizeRole("Librarian"), deleteMember);
router.get("/:id/history", autheticateJWT, authorizeRole("Librarian"), getMemberHistory);

router.delete("/me", autheticateJWT, authorizeRole("Member"), deleteOwnAccount)

module.exports = router