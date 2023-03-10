
const Sequelize = require("sequelize");
// using sql package to connect my sql data base with node.js application
const sequelize = new Sequelize("ecommerce_db", "root", "rootr00t!", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize;
