# Direct7 Node.js SDK

Node.js SDK to seamlessly incorporate communication features into your Node.js applications via the Direct7 REST API. This SDK empowers you to effortlessly initiate SMS,Whatsapp, Slack, Viber  messages and 2 factor authentication features.

## Documentation
The documentation for the Direct7 REST API can be found here [Direct7 API Reference](https://d7networks.com/docs/).


## Installation

Install the SDK using npm

```bash
npm i direct7
```

## Usage

To get started you need to have an active Direct7 account, If you haven't yet registered, please proceed to [Sign up](https://app.d7networks.com/signup?tag="direct7-nodejs-sdk")

### Authentication

In order to initiate API requests, create a client object using your Direct7 API token. To obtain an API token, kindly visit the following link: https://app.d7networks.com/api-tokens.

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")
```

## Examples

  - [SMS](#sms)
  - [Verify](#verify)
  - [Whatsapp](#whatsapp)
  - [Number Lookup](#number-lookup)
  - [Viber](#viber)
  - [Slack](#slack)

### SMS

For comprehensive information on SMS request parameters, please refer [SMS API Reference](https://d7networks.com/docs/SMS/Send-SMS/)

### Send an SMS

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

 const response = await client.sms.sendMessage({
      recipients : ['+91999XXXXXXX'],
      content : 'Greetings from D7 API',
      originator : 'SignOtp',
      report_url : 'https://the_url_to_recieve_delivery_report.com',
      unicode : false
    });
console.log(response);
```

### Send a Unicode SMS Message

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

 const response = await client.sms.sendMessage({
      recipients : ['+91999XXXXXXX'],
      content : 'لوحة المفاتيح العربية!',
      originator : 'SignOtp',
      report_url : 'https://the_url_to_recieve_delivery_report.com',
      unicode : true
    });
console.log(response);
```

### Check SMS Request Status

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

 // request_id is the id returned in the response of sendMessage
const response = await client.sms.getStatus({request_id:"0015e146-4edb-4302-91fe-cdcf868a6cf2"});
console.log(response);
```

### Verify

For comprehensive information on verify API, please refer [Verify API Reference](https://d7networks.com/docs/Verify/Generate/)


### Send OTP

```python
const Client = require('direct7')

const client = new Client(apiToken="Your API token")

const response = await client.verify.sendOTP({
            originator: "SignOTP", recipient: "+9199999XXXXX",
            content: "Greetings from D7 API, your mobile  verification code is: {}",
            expiry: 600,
            data_coding: "text"
        })

console.log(response);
```

### Re-Send OTP

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

const response = await client.verify.resendOTP({otp_id : "bc4f5e29-dcfa-4d81-9cb1-d6c5002a96bd"})
console.log(response);
```

### Verify OTP

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

const response = await client.verify.verifyOTP({otp_id: "b4c3ac5d-df5f-4df7-85b9-aba64c5da228", otp_code: "749679"});

console.log(response);
```

### Check OTP Status

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

// otp_id is the id returned in the response of send_otp
const response = await client.verify.getStatus({otp_id: "d4c6b4e9-532d-4be7-9e9e-897f97847fbd"});
console.log(response);
```

### Whatsapp

For comprehensive information on Whatsapp API, please refer [Whatsapp API Reference](https://d7networks.com/docs/Whatsapp/Overview/)

### Send Whatsapp Free-form Message (Location Details)

```python
const Client = require('direct7')

const client = new Client(apiToken="Your API token")

const response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator : "91906152XXXX", recipient : "91999999XXXX", message_type: "LOCATION",  longitude : "11.93803129081362", latitude:"44.61088653615994", location_address:"Address", location_name:"Name"
        });

console.log(response);
```

### Send Whatsapp Templated Message.

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

const response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator : "91906152XXXX", recipient : "91999999XXXX",
            template_id : "marketing_media_image", body_parameter_values : {"0": "Customer"}, media_type : "image",
            media_url : "https://d7networks.com/static/resources/css/img/favicon.d27f70e6ebd0.png"
        });
console.log(response);
```

### Check Whatsapp Request Status

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

// request_id is the id returned in the response of send_message
const response = await client.whatsapp.getStatus({request_id: "987efe2a-c68f-4cfb-8301-662b574d21c0"});
console.log(response);
```

### Number Lookup

For comprehensive information on Number Lookup API, please refer [Number Lookup Reference](https://d7networks.com/docs/Number-Lookup/)

### Search Your Phone Number Details

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

const response = await client.number_lookup.searchNumberDetails({recipient : "+91999999XXXX"});
console.log(response);
```


### Viber

For comprehensive information on Viber API, please refer [Viber API Reference](https://d7networks.com/docs/Viber/Send-Viber-Message/)

### Send a Viber Message

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

const response = await client.viber.sendViberMessage({
            recipients : ["+9199999XXXXX"],
            content : 'Hello, this is a test message!',
            label : 'PROMOTION',
            originator : 'SignOTP',
            call_back_url : 'https://the_url_to_recieve_delivery_report.com'
        });

console.log(response);
```

### Check Viber Request Status

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

// request_id is the id returned in the response of send_viber_message
const response = await client.viber.getStatus({request_id:"002ad5b1-c142-4273-8d82-56da6ea5f5c3"});
console.log(response);
```

### Slack

For comprehensive information on Slack API, please refer [Slack API Reference](https://d7networks.com/docs/Slack/Send-Message/)

### Send Slack Message

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

const response = await client.slack.sendSlackMessage({
            content : 'Hello, this is a test message!',
            work_space_name : 'WoekSpaceName',
            channel_name : 'ChannelName',
            report_url : 'https://the_url_to_recieve_delivery_report.com'
        });
console.log(response);
```

### Check Slack Request Status

```js
const Client = require('direct7')
const client = new Client(apiToken="Your API token")

// request_id is the id returned in the response of send_slack_message
const response = await client.slack.getStatus({request_id: "002ad5b1-c142-4273-8d82-56da6ea5f5c3"});
console.log(response);
```

## FAQ

### How do I get my API token?

You can get your API token from the Direct7 dashboard. If you don't have an account yet, you can create one for free.

### Supported nodejs versions

The SDK supports node 18 and higher.

### Supported APIs

As of now, the SDK supports the following APIs:

| API               | Supported? |
| ----------------- | :--------: |
| SMS API           |     ✅     |
| Verify API        |     ✅     |
| Whatsapp API      |     ✅     |
| Number Lookup API |     ✅     |
| Viber API         |     ✅     |
| Slack API         |     ✅     |

### How do I get started?

You can find the platform documentation @ [Direct7 Docs](https://d7networks.com/docs/).

### How do I get help?

If you need help using the SDK, you can create an issue on GitHub or email to support@d7networks.com

## Contributing

We welcome contributions to the Direct7 npm SDK. If you have any ideas for improvements or bug fixes, please feel
free to create an issue on GitHub.
