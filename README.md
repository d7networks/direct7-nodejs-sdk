# Direct7 npm SDK

This npm SDK provides a convenient and easy-to-use interface to the Direct7 REST API. The SDK allows you to perform
all the operations that are available through the REST API.

## Installation

The SDK is available on npm and can be installed using `npm install`:

```bash
npm i direct7
```

## Usage

The SDK is designed to be easy to use. To get started, you need to create a client instance:

### Send SMS

```python
const Client = require('direct-7')

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

### Get Request Status

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")
# request_id is the id returned in the response of send_message
const response = await client.sms.getStatus({request_id:"0015e146-4edb-4302-91fe-cdcf868a6cf2"});

console.log(response);
```

### Send OTP

```python
const Client = require('direct-7')

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

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

const response = await client.verify.resendOTP({otp_id : "bc4f5e29-dcfa-4d81-9cb1-d6c5002a96bd"})

console.log(response);
```

### Verify OTP

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

const response = await client.verify.verifyOTP({otp_id: "b4c3ac5d-df5f-4df7-85b9-aba64c5da228", otp_code: "749679"});

console.log(response);
```

### Get Request Status

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

# otp_id is the id returned in the response of send_otp
const response = await client.verify.getStatus({otp_id: "d4c6b4e9-532d-4be7-9e9e-897f97847fbd"});

console.log(response);
```

### Send Viber Message

```python
const Client = require('direct-7')

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

### Get Request Status

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

# request_id is the id returned in the response of send_viber_message
const response = await client.viber.getStatus({request_id:"002ad5b1-c142-4273-8d82-56da6ea5f5c3"});

console.log(response);
```

### Send Slack Message

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

const response = await client.slack.sendSlackMessage({
            content : 'Hello, this is a test message!',
            work_space_name : 'WoekSpaceName',
            channel_name : 'ChannelName',
            report_url : 'https://the_url_to_recieve_delivery_report.com'
        });

console.log(response);
```

### Get Request Status

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

# request_id is the id returned in the response of send_slack_message
const response = await client.slack.getStatus({request_id: "002ad5b1-c142-4273-8d82-56da6ea5f5c3"});

console.log(response);
```

### Search Your Number details

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

const response = await client.number_lookup.searchNumberDetails({recipient : "+91999999XXXX"});

console.log(response);
```

### Send Whatsapp Free-form Message (Location Details)

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

const response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator : "91906152XXXX", recipient : "91999999XXXX", message_type: "LOCATION",  longitude : "11.93803129081362", latitude:"44.61088653615994", location_address:"Address", location_name:"Name"
        });

console.log(response);
```

### Send Whatsapp Templated Message.

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

const response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator : "91906152XXXX", recipient : "91999999XXXX",
            template_id : "marketing_media_image", body_parameter_values : {"0": "Customer"}, media_type : "image",
            media_url : "https://d7networks.com/static/resources/css/img/favicon.d27f70e6ebd0.png"
        });

console.log(response);
```

### Get Request Status

```python
const Client = require('direct-7')

const client = new Client(apiToken="Your API token")

# request_id is the id returned in the response of send_message
const response = await client.whatsapp.getStatus({request_id: "987efe2a-c68f-4cfb-8301-662b574d21c0"});

console.log(response);
```

## FAQ

### How do I get my API token?

You can get your API token from the Direct7 dashboard. If you don't have an account yet, you can create one for free.

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

We welcome contributions to the Direct7 Npm SDK. If you have any ideas for improvements or bug fixes, please feel
free to create an issue on GitHub.
