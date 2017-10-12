const config = require('../config/config');
const JLSend = require('./JLSend');
const db = require('./db');

global.config = config;
global.JLSend = JLSend;
global.db = db;