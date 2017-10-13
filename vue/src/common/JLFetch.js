export default (path, method, params) => {
    let fetchUrl = config.requestUrl + path;
    let methodUpStr = method.toUpperCase(); // 统一转换成大写

    let requestParams = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (methodUpStr == 'GET') {
        // 拼接GET请求的请求参数导url中
        let str = '';
        if (typeof params === 'object' && params) {
            str += '?';
            Object.keys(params).forEach(function(val) {
                str += val + '=' + encodeURIComponent(params[val]) + '&';
            })
        }
        fetchUrl += str;
    } else {
        requestParams.body = JSON.stringify(params)
    }

    return fetch(fetchUrl, requestParams)
        .then(response => response.json());
}