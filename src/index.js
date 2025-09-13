const express = require("express");
const bookRoutes = require("../src/web-api/routes/bookRoutes");
const authRoutes = require("../src/web-api/routes/authRoutes");
const loggerMiddleware = require("../src/web-api/middleware/loggerMiddleware");

const setupSwagger = require("./web-api/swagger");

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

setupSwagger(app);
app.use("/", authRoutes);
app.use("/", bookRoutes);

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

module.exports = app;
