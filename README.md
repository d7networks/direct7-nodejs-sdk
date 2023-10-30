# Direct7 npm SDK

This npm SDK provides a convenient and easy-to-use interface to the Direct7 REST API. The SDK allows you to perform
all the operations that are available through the REST API.

## Installation

The SDK is available on npm and can be installed using `npm install`:

```bash
npm install direct7
```

## Usage

The SDK is designed to be easy to use. To get started, you need to create a client instance:


### Send SMS

```python
const Client = require('/direct7/Client')

const client = new Client(api_token="Your API token")

client.sms.sendMessage(recipients = ["+97150900XXXX","+97845900XXX"], content = "Greetings from D7 API", originator = "SignOTP", report_url = "https://the_url_to_recieve_delivery_report.com", unicode = False)
```


### Get Request Status

```python
const Client = require('/direct7/Client')

const client = new Client(api_token="Your API token")

# request_id is the id returned in the response of send_message
client.sms.getStatus(request_id="0012c7f5-2ba5-49db-8901-4ee9be6dc8d1")
```
