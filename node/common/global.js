const config = require('../config/config');
const JLSend = require('./JLSend');
const mysql_db = require('./db').mysql_db;

global.config = config;
global.JLSend = JLSend;
global.mysql_db = mysql_db;