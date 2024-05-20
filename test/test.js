const Client = require('../Client')

const client = new Client(apiToken = 'API Token');

async function testSendWhatsAppMessages(client) {
    try {
        let response;

        // TEXT
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "TEXT",
            body: "Hi"
        });
        console.log('TEXT message sent successfully. Response:', response);


        // REACTION
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "REACTION",
            message_id: "9f87d93e-1696-11ef-a5a3-0242ac1b002c",
            emoji: "\uD83D\uDE00"
        });
        console.log('TEXT message sent successfully. Response:', response);


        // ATTACHMENT: image
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "ATTACHMENT",
            type: "image",
            url: "https://t4.ftcdn.net/jpg/01/43/23/83/360_F_143238306_lh0ap42wgot36y44WybfQpvsJB5A1CHc.jpg",
            caption: "Tet"
        });
        console.log('ATTACHMENT message sent successfully. Response:', response);


        // // ATTACHMENT: video
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "ATTACHMENT",
            type: "video",
            url: "https://www.onirikal.com/videos/mp4/nestlegold.mp4",
            caption: "Video"
        });
        console.log('ATTACHMENT message sent successfully. Response:', response);


        // // ATTACHMENT: document
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "ATTACHMENT",
            type: "document",
            url: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
            caption: "Test PDF file pdf",
            filename: "TestPDFfile.pdf"
        });
        console.log('ATTACHMENT message sent successfully. Response:', response);


        // ATTACHMENT: audio
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "ATTACHMENT",
            type: "audio",
            url: "http://fate-suite.ffmpeg.org/mpegaudio/extra_overread.mp3",
        });
        console.log('ATTACHMENT message sent successfully. Response:', response);


        // ATTACHMENT: Sticker
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "ATTACHMENT",
            type: "sticker",
            url: "https://raw.githubusercontent.com/sagarbhavsar4328/dummys3bucket/master/sample3.webp"
        });
        console.log('ATTACHMENT message sent successfully. Response:', response);


        LOCATION
        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "LOCATION",
            latitude:"12.93803129081362",
            longitude:"77.61088653615994",
            name:"Mobile Pvt Ltd",
            address:"30, Hosur Rd, 7th Block, Koramangala, Bengaluru, Karnataka 560095"
        });
        console.log('ATTACHMENT message sent successfully. Response:', response);


        // Contacts

        let contact_addresses = [
                {
                    "street": "1 Lucky Shrub Way",
                    "city": "Menlo Park",
                    "state": "CA",
                    "zip": "94025",
                    "country": "United States",
                    "country_code": "US",
                    "type": "WORK"
                },
                {
                    "street": "1 Hacker Way",
                    "city": "Menlo Park",
                    "state": "CA",
                    "zip": "94025",
                    "country": "United States",
                    "country_code": "US",
                    "type": "WORK"
                }
            ]

        let phones = [
                {
                    "phone": "+16505559999",
                    "type": "HOME"
                },
                {
                    "phone": "+19175559999",
                    "type": "WORK",
                    "wa_id": "19175559999"
                }
            ]

        let emails = [
                {
                    "email": "bjohnson@luckyshrub.com",
                    "type": "WORK"
                },
                {
                    "email": "bjohnson@luckyshrubplants.com",
                    "type": "HOME"
                }
            ]
        let urls = [
                {
                    "url": "https://www.luckyshrub.com",
                    "type": "WORK"
                },
                {
                    "url": "https://www.facebook.com/luckyshrubplants",
                    "type": "WORK"
                }
            ]

        response = await client.whatsapp.sendWhatsAppFreeformMessage({
            originator:"xxxxxxxxxxxx",
            recipient: "+XXXXXXXXXX",
            message_type: "CONTACTS",
            first_name: "Barbara",
            last_name: "Johnson",
            formatted_name: "Barbara J. Johnson",
            middle_name: "Joana", suffix: "Esq.",
            prefix: "Dr.",
            phones: phones, emails: emails,
            contact_addresses: contact_addresses,
            urls:urls
        });
        console.log('CONTACTS message sent successfully. Response:', response);


         // Interactive: cta
        let parameters = {
          "display_text": "Visit Us",
          "url": "https://www.luckyshrub.com?clickID=kqDGWd24Q5TRwoEQTICY7W1JKoXvaZOXWAS7h1P76s0R7Paec4"
        }

        response = await client.whatsapp.sendWhatsAppInteractiveMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXXXXX",
            interactive_type: "cta_url",
            header_type: "text",
            header_text: "Payment$ for D7 Whatsapp Service",
            body_text: "Direct7 Networks is a messaging service provider that specializes in helping organizations efficiently communicate with their customers.",
            footer_text: "Thank You",
            parameters: parameters
        });

        console.log(response);


        //  Interactive: button
        let buttons = [{"type": "reply", "reply": {"id": "1", "title": "Debit Card"}}, {
            "type": "reply",
            "reply": {"id": "2", "title": "Credit"}
        }]


        response = await client.whatsapp.sendWhatsAppInteractiveMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXXXXX",
            interactive_type: "button",
            header_type: "image",
            header_link: "https://karix.s3.ap-south-1.amazonaws.com/English-4.jpg",
            body_text: "Direct7 Networks is a messaging service provider that specializes in helping organizations efficiently communicate with their customers.",
            footer_text: "Thank You",
            buttons: buttons
        });

        console.log(response);

        //  Interactive: list
            let sections = [
            {
                "title": "SMS Messaging",
                "rows": [
                    {
                        "id": "1",
                        "title": "Normal SMS",
                        "description": "Signup for free at the D7 platform to use our Messaging APIs."
                    },
                    {
                        "id": "2",
                        "title": "Verify",
                        "description": "D7 Verify API is to applications requires SMS based OTP authentications."
                    }
                ]
            },
            {
                "title": "Whatsapp",
                "rows": [
                    {
                        "id": "3",
                        "title": "WhatsApp Messages",
                        "description": "D7 Whatsapp API is to applications requires pre-registration."
                    }
                ]
            }
        ]

        response = await client.whatsapp.sendWhatsAppInteractiveMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXXXXX",
            interactive_type: "list",
            header_type: "text",
            header_text: "Payment$ for D7 Whatsapp Service",
            body_text: "Direct7 Networks is a messaging service provider that specializes in helping organizations efficiently communicate with their customers.",
            footer_text: "Thank You",
            sections: sections,
            list_button_text: "Choose Service"
        });

        console.log(response);

        // Templated: no body parm
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
                originator : "XXXXXXXXXX",
                recipient : "XXXXXXXXXX",
                template_id : "testing_alpha", language: "en"});
        console.log(response);

        // Templated: with body parm
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator : "XXXXXXXXXX",
            recipient : "XXXXXXXXXX",
            template_id : "with_personalize",
            language: "en",
            body_parameter_values : {"0": "Anil"}});

        console.log(response);


        // Templated: media: text
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator : "XXXXXXXXXX", recipient : "XXXXXXXXXX",
            template_id : "header_param", language: "en", media_type : "text",
            text_header_title : "Tom"
        });

        console.log(response);


        // Templated: media: image
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
                    originator : "XXXXXXXXXX", recipient : "XXXXXXXXXX",
                    template_id : "image", language: "en", media_type : "image",
                    media_url : "https://miro.medium.com/max/780/1*9Wdo1PuiJTZo0Du2A9JLQQ.jpeg"
                });

        console.log(response);


        // Templated: media: video
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
                    originator : "XXXXXXXXXX", recipient : "XXXXXXXXXX",
                    template_id : "video", language:"en", media_type : "video",
                    media_url : "http://www.onirikal.com/videos/mp4/nestlegold.mp4"
                });

        console.log(response);


        // Templated: media: video
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
                    originator : "XXXXXXXXXX", recipient : "XXXXXXXXXX",
                    template_id : "document", language: "en", body_parameter_values : {"0": "first_parameter_in_your_template"}, media_type : "document",
                    media_url : "https://www.clickdimensions.com/links/TestPDFfile.pdf"
                });

        console.log(response);


        // Templated: media: location
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
                    originator : "XXXXXXXXXX", recipient : "XXXXXXXXXX",
                    template_id : "location", language: "en", media_type : "location",
                    latitude : "12.93803129081362", longitude : "77.61088653615994",name : "Mobile Pvt Ltd", address : "Bengaluru, Karnataka 560095"
                });

        console.log(response);


        // Templated: quick_replies
        let quick_replies = [
            {
                "button_index": "0",
                "button_payload": "1"
            },
            {
                "button_index": "1",
                "button_payload": "2"
            }
        ]
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXXXXX",
            template_id: "quick_reply",
            language: "en",
            quick_replies: quick_replies
        });

        console.log(response);


        // Templated: actions
        let actions2 = [
            {
                "action_type": "url",
                "action_index": "0",
                "action_payload": "dash"
            }
        ]

        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXXXXX",
            template_id: "call_to_action",
            language: "en",
            actions: actions2
        });

        console.log(response);


        // Templated: coupon_code
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXXXXX",
            template_id: "coupon_code",
            language: "en",
            body_parameter_values: {"0": "first_parameter_in_your_template"}, coupon_code: "DAS558HG"
        });

        console.log(response);


        // Templated: authentication
        let actions3 = [
            {
                "action_type": "url",
                "action_index": "0",
                "action_payload": "434343"
            }
        ]

        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXXXXX",
            template_id: "call_to_action",
            language: "en",
            actions: actions3
        });

        console.log(response);


        let cards = [
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
        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator: "xxxxxxxxxxxx",
            recipient: "XXXXXXXXXX",
            template_id: "carousel_card",
            language: "en",
            carousel_cards: cards
        });
        console.log('Templated message sent successfully. Response:', response);

        response = await client.whatsapp.sendWhatsAppTemplatedMessage({
            originator: "XXXXXXXXXX",
            recipient: "XXXXXXXXXX",
            template_id: "limited_time_offer",
            language: "en",
            media_type: "image",
            media_url: "https://miro.medium.com/max/780/1*9Wdo1PuiJTZo0Du2A9JLQQ.jpeg",
            lto_expiration_time_ms: "1708804800000",
            coupon_code: "DWS44"
        });
        console.log('Templated message sent successfully. Response:', response);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

testSendWhatsAppMessages(client);