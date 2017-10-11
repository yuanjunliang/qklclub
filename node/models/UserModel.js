 const Sequelize = require('Sequelize');
 const sequelize = require('../common/db').sequelize;

 const UserModel = sequelize.define("users", {
     username: { type: Sequelize.STRING },
     password: { type: Sequelize.STRING, allowNull: false },
     user_id: { type: Sequelize.STRING, primaryKey: true, unique: true },
     telphone: { type: Sequelize.STRING, unique: true },
     create_time: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
     province: { type: Sequelize.STRING },
     city: { type: Sequelize.STRING },
     country: { type: Sequelize.STRING },
     address: { type: Sequelize.STRING }
 });

 /**
  * 同步表结构
  */
 UserModel.sync({ force: false });

 module.exports = UserModel;