const Sequelize = require('sequelize');
const sequelize = db.sequelize;

const UserModel = sequelize.define('user', {
    user_id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
    username: { type: Sequelize.STRING, allowNull: false, defaultValue: true },
    password: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    icon: Sequelize.STRING
})

UserModel.sync({ force: false });

module.exports = UserModel;