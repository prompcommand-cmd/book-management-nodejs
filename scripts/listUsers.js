const { Sequelize } = require("sequelize");
const User = require("../src/domain/entities/user");

(async () => {
  try {
    await User.sync();

    const users = await User.findAll();
    console.log(JSON.stringify(users, null, 2));
  } catch (err) {
    console.error(err);
  }
})();
