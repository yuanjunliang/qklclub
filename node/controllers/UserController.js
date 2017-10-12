const UserModel = require('../models/UserModel');
const md5 = require('../tools/JLCrypto').md5;
const uuid = require('node-uuid');

exports.user_add = (req, res, next) => {
    let params = req.body;
    let email = params.email;
    let username = params.username;
    let password = params.password;

    UserModel.create({
        user_id: uuid.v1(),
        username: username,
        password: md5(password),
        email: email
    }, (error, response) => {
        if (error) {
            JLSend.send_sys_error(error, req.body.api_name, res);
        } else {
            JLSend.send('0', req.body.api_name, res);
        }
    })
}

exports.user_login = (req, res) => {}

exports.user_edit = (req, res) => {}