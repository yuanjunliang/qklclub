const mongoose = require('mongoose');
const mongo_db = db.mongo_db;

const schema = {
    category_id: { type: String, required: true },
    category_name: String,
    category_path: [],
    category_level: String
}

const CategoryModel = mongo_db.model('categorys', mongoose.Schema(schema));
module.exports = CategoryModel;