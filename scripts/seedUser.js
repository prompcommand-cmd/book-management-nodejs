const bcrypt = require("bcryptjs");
const User = require("../src/domain/entities/user");

(async () => {
  try {
    await User.sync();

    const hashed = await bcrypt.hash("password123", 10);

    const user = await User.create({
      username: "admin",
      password: hashed,
    });

    console.log("User created:", user.toJSON());
  } catch (err) {
    console.error(err);
  }
})();
