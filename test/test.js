const Client = require('../Client')

const client = new Client(apiToken = 'API Token');

async function testSendWhatsAppMessages(client) {
    try {
        let response;

        // Test sending CONTACTS message
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator: "9181XXXXXXXX",
            recipient: "9190XXXXXXXX",
            message_type: "CONTACTS",
            first_name: "Amal",
            last_name: "Anu",
            formatted_name: "Amal Anu",
            phones: ["9181XXXXXXXX", "9181XXXXXXXX"],
            emails: ["amal@gmail.com", "amal@gmail1.com"]
        });
        console.log('CONTACTS message sent successfully. Response:', response);

        // Test sending TEXT message
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator: "XXXXX",
            recipient: "XXXXXXX",
            message_type: "TEXT",
            body: "Hi"
        });
        console.log('TEXT message sent successfully. Response:', response);

        // Test sending ATTACHMENT message
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXX",
            message_type: "ATTACHMENT",
            type: "image",
            url: "https://upload.wikimedia.org",
            caption: "Test"
        });
        console.log('ATTACHMENT message sent successfully. Response:', response);

        // Test sending LOCATION message
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator: "XXXXX",
            recipient: "XXXXXXX",
            message_type: "LOCATION",
            latitude: "12.93803129081362",
            longitude: "77.61088653615994",
            name: "Karix Mobile Pvt Ltd",
            address: "30, Hosur Rd, 7th Block, Koramangala, Bengaluru, Karnataka 560095"
        });
        console.log('LOCATION message sent successfully. Response:', response);

        // Test sending templated message
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator: "XXXXXXXXX",
            recipient: "XXXXXXX",
            template_id: "limited_time_offer",
            media_type: "image",
            media_url: "https://miro.medium.com/max/780/1*9Wdo1PuiJTZo0Du2A9JLQQ.jpeg",
            lto_expiration_time_ms: "1708804800000",
            coupon_code: "DWS44"
        });
        console.log('Templated message sent successfully. Response:', response);

        const actions = [
            {
                "action_type": "url",
                "action_index": "0",
                "action_payload": "dashboard"
            }
        ]

        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator: "XXXXXXXXX",
            recipient: "XXXXXXX",
            template_id: "click_me",
            actions: actions
        });
        console.log('Templated message sent successfully. Response:', response);

        cards = [
            {
                "card_index": "0",
                "components": [
                    {
                        "type": "header",
                        "parameters": [
                            {
                                "type": "image",
                                "image": {
                                    "link": "https://miro.medium.com/max/780/1*9Wdo1PuiJTZo0Du2A9JLQQ.jpeg"
                                }
                            }
                        ]
                    },
                    {
                        "type": "button",
                        "sub_type": "quick_reply",
                        "index": "0",
                        "parameters": [
                            {
                                "type": "payload",
                                "payload": "2259NqSd"
                            }
                        ]
                    }
                ]
            },
            {
                "card_index": "1",
                "components": [
                    {
                        "type": "header",
                        "parameters": [
                            {
                                "type": "image",
                                "image": {
                                    "link": "https://www.selfdrive.ae/banner_image/desktop/21112023164328_409449002729.jpg"
                                }
                            }
                        ]
                    },
                    {
                        "type": "button",
                        "sub_type": "quick_reply",
                        "index": "0",
                        "parameters": [
                            {
                                "type": "payload",
                                "payload": "59NqSdd"
                            }
                        ]
                    }
                ]
            }
        ]
    
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({originator:"XXXXXXXXX", recipient:"XXXXXXX", message_type:"TEMPLATE", template_id:"carousel_card", carousel_cards:cards})

    } catch (error) {
        console.error('Error:', error.message);
    }
}

testSendWhatsAppMessages(client);