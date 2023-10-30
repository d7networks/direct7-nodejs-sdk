const Client = require('../src/direct7/Client');
const SMS = require('../src/direct7/sms');

const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiOTM2M2FmNTUtYWRmMS00Y2YzLWJhNjEtNGRjNWIxOTE4NGUwIn0.rctBTKBUO2FERmv_j75ItWACpUDQ7NG14v1PeXlM1ks'; // Replace with your actual API token
const client = new Client(apiToken);
const sms = new SMS(client);

async function testSendMessage() {
  try {
    const recipients = ['+918086757074'];
    const content = 'Hello, this is a test message!';
    const originator = 'SignOtp';
    const reportUrl = 'ReportUrl.com';

    const response = await sms.sendMessage(recipients, content, originator, reportUrl);

    console.log('Message sent successfully. Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function testGetStatus() {
  try {
    const requestId = '001fe688-8cdc-40c7-8972-98acffc1cc5d';

    const response = await sms.getStatus(requestId);

    console.log('Message status retrieved successfully. Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testSendMessage();
testGetStatus();