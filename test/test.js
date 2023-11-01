
const Client = require('direct7')

const client = new Client(apiToken='Your API token');

async function testSendMessage() {
  try {
    const response = await client.sms.sendMessage({
      recipients : ['+9199967XXXX'],
      content : 'Hello, this is a test message!',
      originator : 'SignOtp',
      report_url : 'ReportUrl.com',
      unicode : false
    });

    console.log('Message sent successfully. Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function testGetStatus() {
  try {
    const response = await client.sms.getStatus({request_id:"0015e146-4edb-4302-91fe-cdcf868a6cf2"});

    console.log('Message status retrieved successfully. Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testSendMessage();
testGetStatus();