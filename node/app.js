const express = require('express');
const path = require('path');
const global = require('./common/global');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const app = express();
const db = require('./common/db');
const router_pre_check = require('./routes/router_pre_check');

// 使用中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// 解决跨域请求
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.listen(config.port, () => {
    console.log("server listening on port number", config.port);
})

// 使用路由中间件
// router_pre_check(app);
app.use('/', router_pre_check);
module.exports = app;