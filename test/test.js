const Client = require('../src/direct7/Client');

const client = new Client(apiToken='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiOTM2M2FmNTUtYWRmMS00Y2YzLWJhNjEtNGRjNWIxOTE4NGUwIn0.rctBTKBUO2FERmv_j75ItWACpUDQ7NG14v1PeXlM1ks');

async function testSendMessage() {
  try {
    const response = await client.sms.sendMessage(recipients=['+918086757074'], content='Hello, this is a test message!', originator='SignOtp', reportUrl='ReportUrl.com', unicode=false);

    console.log('Message sent successfully. Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function testGetStatus() {
  try {
    const requestId = '0015e146-4edb-4302-91fe-cdcf868a6cf2';

    const response = await client.sms.getStatus(requestId);

    console.log('Message status retrieved successfully. Response:', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testSendMessage();
testGetStatus();