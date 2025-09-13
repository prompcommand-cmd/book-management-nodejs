const IAuthRepository = require("../../domain/interfaces/IAuthRepository");
const User = require("../../domain/entities/user");

class AuthRepository extends IAuthRepository {
  async createUser(user) {
    return await User.create(user);
  }

  async findUserByUsername(username) {
    return await User.findOne({ where: { username } });
  }
}

module.exports = AuthRepository;
