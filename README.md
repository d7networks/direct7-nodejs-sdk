
# Direct7 npm SDK

This npm SDK provides a convenient and easy-to-use interface to the Direct7 REST API. The SDK allows you to perform
all the operations that are available through the REST API.

## Installation

The SDK is available on npm and can be installed using `npm`:

```bash
npm install direct7 0.0.3
```

## Usage

The SDK is designed to be easy to use. To get started, you need to create a client instance:


### Send SMS

```python
const Client = require('direct7/Client');

const client = new Client(apiToken='Your API token');

client.sms.sendMessage(recipients=['+91999XXXXXXX'], content='Hello, this is a test message!', originator='SignOtp', reportUrl='https://the_url_to_recieve_delivery_report.com', unicode=false);
```


### Get Request Status

```python
const Client = require('direct7/Client');

const client = new Client(api_token="Your API token");

# request_id is the id returned in the response of send_message
client.sms.getStatus(request_id="0012c7f5-2ba5-49db-8901-4ee9be6dc8d1")
```
## FAQ

### How do I get my API token?

You can get your API token from the Direct7 dashboard. If you don't have an account yet, you can create one for free.

### Supported Python versions

The SDK supports Python 3.6 and higher.

### Supported APIs

As of now, the SDK supports the following APIs:

| API                    |        Supported?       |
|------------------------|:-----------------------:|
| SMS API                |            ✅           |
| Verify API             |                         |
| Whatsapp API           |                         |
| Number Lookup API      |                         |
| Viber API              |                         |
| Slack API              |                         |

### How do I get started?

You can find the platform documentation @ [Direct7 Docs](https://d7networks.com/docs/).

### How do I get help?

If you need help using the SDK, you can create an issue on GitHub or email to support@d7networks.com

## Contributing

We welcome contributions to the Direct7 Python SDK. If you have any ideas for improvements or bug fixes, please feel
free to create an issue on GitHub.
