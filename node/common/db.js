const mongoose = require('mongoose');
const config = require('../config/config');

const mongo_db = mongoose.createConnection(config.mongo_db1.path, () => {
    console.log("mongodb connect success")
});

exports.mongo_db = mongo_db;