const msg91 = require('../index');

const Auth_Key = 'XXX';
const Mobiles = '91XXXXXXXXXX';
const Message = 'Msg91 test sms';
const Sender = 'XXX';
const Route = '4';
const Response_Type = 'json';

const obj = {
    auth_key: Auth_Key,
    mobiles: Mobiles,
    message: Message,
    sender: Sender,
    route: Route,
    response_type: Response_Type,
};

new Promise((resolve, reject) => {

    msg91(obj)
    .then(res => {
        if(res.type == 'error'){
            console.log('error: ', res);
            //return;
            resolve(false);
        } else {
            console.log('success: ',res);
            resolve(true);
        }
    })
    .catch(err => {
        console.log('error: ', err);
        reject(err);
    });
});