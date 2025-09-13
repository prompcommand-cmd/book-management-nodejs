require("dotenv").config({ path: __dirname + "/.env" });

const PORT = process.env.PORT;
const app = require("./index");
const { sequelize } = require("./infratructure/config/database");

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
}

start();
