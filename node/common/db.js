const Sequelize = require('sequelize');
const config = require('../config/config');
const sequelize = new Sequelize(config.mysql_db.database, config.mysql_db.username, config.mysql_db.password, {
    host: config.mysql_db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


// 数据库连接
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// 导出数据库
exports.sequelize = sequelize;