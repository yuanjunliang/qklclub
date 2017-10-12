const mongoose = require('mongoose');
const mongo_db = db.mongo_db;

const schema = {
    title: String,
    content: String,
    create_time: { type: Date, default: Date.now },
    userInfo: { type: Schema.Types.ObjectId, ref: 'users' },
    categoryInfo: { type: Schema.Types.ObjectId, ref: 'categorys' }
}

const PostModel = mongo_db.model('posts', mongoose.Schema(schema));
module.exports = PostModel;