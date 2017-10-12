const mongoose = require('mongoose');
const config = require('../config/config');

const mongo_db = mongoose.createConnection(config.mongo_db1.path, config.mongo_db1.options);

exports.mongo_db = mongo_db;