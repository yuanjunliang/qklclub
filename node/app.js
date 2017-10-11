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

app.listen(config.port, () => {
    console.log("server listening on port number", config.port);
})

// 使用路由中间件
// router_pre_check(app);
app.use('/', router_pre_check);
module.exports = app;