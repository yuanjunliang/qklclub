const mongoose = require('mongoose');
const mongo_db = db.mongo_db;

const schema = {
    user_id: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    icon: String
}

// 注意，这里需要用mongoose生成的数据库来创建model
const UserModel = mongo_db.model('users', mongoose.Schema(schema));
module.exports = UserModel;