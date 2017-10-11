const UserModel = require('../models/UserModel');


/**
 * 增加
 */
exports.user_add = (req, res, next) => {
    let params = req.body;

    console.log("用户注册添加")
    console.log({
        params
    })
    UserModel.create({
            username: "yuanjunliang",
            password: "john"
        })
        .then(task => {
            if (task) {
                res.send("注册成功");
            } else {
                res.send("注册失败");
            }
        })
}

/**
 * 修改
 */
exports.user_update = (req, res, next) => {
    UserModel.update({ password: "test" }, { where: { username: "yuanjunliang", password: "john" } }).then(() => {
        res.send("更新成功")
    })
}

/**
 * 查询
 */
exports.find_user_info = (req, res, next) => {
    UserModel.findOne({ where: { username: "yuanjunliang" } })
        .then((result) => {
            res.send({
                result: result
            })
        })
}

/**
 * 删除
 */
exports.delete_user = (req, res, next) => {
    UserModel.destroy({ where: { username: "yuanjunliang" } })
        .then((result) => {
            res.send({
                result: result
            })
        })
}