const superagent = require('superagent');
const _ = require('lodash');

const config = {
    auth_key: null,
    mobiles: null,
    message: null,
    sender: null,
    route: null,
    response: null,
    timeout: 5000
}

function send(obj) {

    const url = 'http://world.msg91.com/api/sendhttp.php';
    
    obj = Object.assign(config,obj);
    
    let auth_key = obj.auth_key,
        mobiles = obj.mobiles,
        message = obj.message,
        sender = obj.sender,
        route = obj.route,
        response = obj.response,
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
    if (_.isEmpty(response)) {
        throw ("Invalid response");
    }

    const headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
    };

    const data = {authkey:auth_key, mobiles:mobiles, message:message, sender:sender, route:route, response:response};

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
                const resp = res;

                //var messageId = resp.messageId;
                
                /*if(code == 200) {
                    response = {'type':'success', 'code':code, 'responce':resp};
                } else {
                    response = {'type':'error', 'code':code, 'responce':resp};
                }*/
                resolve(res);
            })
            .catch(err => reject(err));
    });
}

module.exports = send;