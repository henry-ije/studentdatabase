const Sequelize = require("sequelize");
const sequelize = new Sequelize("crudproject", "crud", "crud123", { 
    host: "localhost",
    dialect: "mysql", 
    pool: {
      max: 5, 
      min: 0,
      acquire: 5000,
      idle: 1000

    }
})
sequelize.authenticate()
.then(()=> {
  console.log("DB connected")
})
.catch(err=> {
  console.log("Could not establish connection", err)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Register database tables
// db.roles = require("./roles")(sequelize, Sequelize)
db.users = require("./users")(sequelize, Sequelize)
db.roles = require("./roles")(sequelize, Sequelize)
db.classes = require("./classes")(sequelize, Sequelize)
db.students = require("./students")(sequelize, Sequelize)

//Relationship models
// One to One
// db.roles.hasOne(db.users)
// db.users.belongsTo(db.roles)

db.users.hasOne(db.students)
db.students.belongsTo(db.users)

//One to Many
db.classes.hasMany(db.students)
db.students.belongsTo(db.classes)

//Many to Many relationship
db.roles.belongsToMany(db.users, {through: "UsersRole"})
db.users.belongsToMany(db.roles, {through: "UsersRole"})

module.exports = db;