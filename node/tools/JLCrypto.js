const crypto = require('crypto');

exports.md5 = (data) => {
    let md5 = crypto.createHash('md5');
    md5.update(data);
    let md5Data = md5.digest('hex');
    return md5Data;
}