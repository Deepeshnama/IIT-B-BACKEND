const express = require("express");

const {
  autheticateJWT,
  authorizeRole,
} = require("../middlewares/authMiddleware");

const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  borrowBook,
  returnBook,
} = require("../controllers/bookController");

const router = express.Router();

router.get("/", autheticateJWT, getAllBooks);
router.post("/", autheticateJWT, authorizeRole("Librarian"), addBook);
router.put("/:id", autheticateJWT, authorizeRole("Librarian"), updateBook);
router.delete("/:id", autheticateJWT, authorizeRole("Librarian"), deleteBook);

router.post("/:id/borrow", autheticateJWT, authorizeRole("Member"), borrowBook);
router.post("/:id/return", autheticateJWT, authorizeRole("Member", returnBook));

module.exports = router;
