class IAuthRepository {
  async createUser(user) {
    throw new Error("createUser not implemented");
  }
  
  async findUserByUsername(username) {
    throw new Error("findUserByUsername not implemented");
  }
}

module.exports = IAuthRepository;
