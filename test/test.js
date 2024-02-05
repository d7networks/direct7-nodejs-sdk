const Client = require('direct7')

const client = new Client(apiToken = 'Your API token');

async function testSendMessage() {
    try {
        const response = await client.sms.sendMessage(
            'SignOtp',
            'https://the_url_to_recieve_delivery_report.com',
            '2024-02-05T07:13:13+0000',
            {
                recipients: ["+recipient1", "recipient2"],
                content: "Schedule Привет от D7 API, Спасибо за тестирование наших служб обмена сообщениями",
                unicode: true
            },
            {recipients: ["+recipient1", "recipient2"], content: "Schedule Greetings from D7 API", unicode: false},
        );

        console.log('Message sent successfully. Response:', response);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function testGetStatus() {
    try {
        const response = await client.sms.getStatus({request_id: "0015e146-4edb-4302-91fe-cdcf868a6cf2"});

        console.log('Message status retrieved successfully. Response:', response);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testSendMessage();
testGetStatus();