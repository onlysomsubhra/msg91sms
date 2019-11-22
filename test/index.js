const msg91 = require('../index');

const Auth_Key = '4214AzNP9EPSDkd5d9ee526';
const Mobiles = '919433412714';
const Message = 'Msg91 test sms from Apps';
const Sender = 'LPESAA';
const Route = 4;
const Response = 'json';

const obj = {
    auth_key: Auth_Key,
    mobiles: Mobiles,
    message: Message,
    sender: Sender,
    route: Route,
    response: Response,
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