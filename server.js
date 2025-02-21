const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const bookRoutes = require("./routes/book.routes");
const historyRoutes = require("./routes/history.routes");

dotenv.config();

const PORT = process.env.PORT || 4800;

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/history", historyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT} `);
  dbConnection();
});
