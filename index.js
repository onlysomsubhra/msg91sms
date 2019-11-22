const superagent = require('superagent');
const _ = require('lodash');

const config = {
    auth_key: null,
    mobiles: null,
    message: null,
    sender: null,
    route: null,
    response_type: null,
    timeout: 5000
}

function send(obj) {

    const url = 'http://world.msg91.com/api/sendhttp.php';
    
    obj = Object.assign(config,obj);
    //console.log('obj',obj);
    
    let auth_key = obj.auth_key,
        mobiles = obj.mobiles,
        message = obj.message,
        sender = obj.sender,
        route = obj.route,
        response_type = obj.response_type,
        timeout = obj.timeout;

    if (_.isEmpty(auth_key)) {
        throw ("Invalid auth key");
    }
    if (_.isEmpty(mobiles)) {
        throw ("Invalid mobiles");
    }
    if (_.isEmpty(message)) {
        throw ("Invalid message");
    }
    if (_.isEmpty(sender)) {
        throw ("Invalid sender");
    }
    if (_.isEmpty(route)) {
        throw ("Invalid route");
    }

    const headers = {
        'Content-Type': 'application/json',
        //'accept': 'application/json',
    };

    const data = {authkey:auth_key, mobiles:mobiles, message:message, sender:sender, route:route, response:response_type};
    //console.log('data',data);
    let response = {};
    return new Promise((resolve, reject) => {
        superagent
            .post(url)
            .send(data) // query string
            .timeout({
                response: timeout,  // Wait 5 seconds for the server to start sending,
                deadline: 60000, // but allow 1 minute for the file to finish loading.
            })
            .set(headers)
            .then((res) => {
                // Do something
                console.log(res);
                const resp = res.body;
                console.log('resp',resp);
                //var messageId = resp.messageId;
                
                /*if(code == 200) {
                    response = {'type':'success', 'code':code, 'responce':resp};
                } else {
                    response = {'type':'error', 'code':code, 'responce':resp};
                }*/
                resolve(resp);
            })
            .catch((err) => {
                console.log('err',err);
                reject(err);
            });
    });
}

module.exports = send;