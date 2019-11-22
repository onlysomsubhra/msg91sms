# Msg91 SMS Gateway

Msg91 API Client for Node.js using [Msg91 API](https://world.msg91.com/apidoc/textsms/send-sms.php) using Auth Key

## Install

```bash
npm install msg91-send-sms --save
```

## Test
```bash
npm test
```

## Basic Usage

```javascript
//import library
const msg91 = require('msg91-send-sms');

//get data from database or ...
const Auth_Key = 'XXX';
const Mobiles = '91XXXXXXXXXX';
const Message = 'Msg91 test sms';
const Sender = 'XXX';
const Route = '4'; // 4 For Transactional & 1 For promotional
const Response_Type = 'json'; // Or send null

const obj = {
    auth_key: Auth_Key,
    mobiles: Mobiles,
    message: Message,
    sender: Sender, 
    route: Route, 
    response: Response_Type, 
};

//send sms
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
```

### Expected success ouput

```
396b766b7556343831373434
```
```
{"type":"success","message":"396b766b7556343831373434"}
```
