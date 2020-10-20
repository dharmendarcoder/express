const sequelize = require("sequelize");
module.exports = new sequelize("movies", "postgres", "david", {
    HOST: "localhost",

    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
