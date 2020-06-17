module.exports = {
  HOST: "hostname",
  USER: "user",
  PASSWORD: "password",
  DB: "database",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
