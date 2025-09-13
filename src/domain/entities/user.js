const { DataTypes } = require("sequelize");
const { sequelize } = require("../../infratructure/config/database");

const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "Users",
    timestamps: true,
  }
);

module.exports = User;
