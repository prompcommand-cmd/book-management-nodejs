const { DataTypes } = require("sequelize");
const { sequelize } = require("../../infratructure/config/database");

const Book = sequelize.define(
  "Book",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    tableName: "Books",
    timestamps: true,
  }
);

module.exports = Book;
