class WHATSAPP {
    constructor(client) {
        this.client = client;
    }

    async sendWhatsAppFreeformMessage({
                                          originator,
                                          recipient,
                                          message_type,
                                          first_name,
                                          last_name,
                                          formatted_name,
                                          middle_name,
                                          suffix,
                                          prefix,
                                          birthday,
                                          contact_addresses,
                                          phones,
                                          emails,
                                          urls,
                                          latitude,
                                          longitude,
                                          name,
                                          address,
                                          type,
                                          url,
                                          caption,
                                          filename,
                                          body,
                                          message_id,
                                          emoji
                                      }) {
        const message = {
            originator,
            recipients: [{recipient}],
            content: {
                message_type,
            },
        };

        if (message_type === "CONTACTS") {
            message.content.contacts = [
                {
                    name: {
                        first_name,
                        last_name,
                        formatted_name,
                        middle_name,
                        suffix,
                        prefix
                    },
                    birthday,
                    addresses: contact_addresses,
                    phones: phones,
                    emails: emails,
                    urls: urls,
                },
            ];
        } else if (message_type === "LOCATION") {
            message.content.location = {
                latitude,
                longitude,
                name,
                address,
            };
        } else if (message_type === "ATTACHMENT") {
            if (type === "document") {
                message.content.attachment = {
                    type,
                    url,
                    caption,
                    filename
                };
            } else {
                message.content.attachment = {
                    type,
                    url,
                    caption,
                };
            }

        } else if (message_type === "TEXT") {
            message.content.text = {
                body,
            };
        } else if (message_type === "REACTION") {
            message.content.reaction = {
                message_id,
                emoji
            };
        }

        return this._sendMessage(message);
    }

    async sendWhatsAppTemplatedMessage({
                                           originator,
                                           recipient,
                                           template_id,
                                           language,
                                           body_parameter_values,
                                           media_type,
                                           text_header_title,
                                           media_url,
                                           latitude,
                                           longitude,
                                           name,
                                           address,
                                           lto_expiration_time_ms,
                                           coupon_code,
                                           actions,
                                           quick_replies,
                                           carousel_cards,
                                       }) {
        const message = {
            originator,
            recipients: [{recipient}],
            content: {
                message_type: "TEMPLATE",
                template: {template_id, language, body_parameter_values},
            },
        };

        if (media_type) {
            if (media_type === "location") {
                message.content.template.media = {
                    media_type: "location",
                    location: {
                        latitude,
                        longitude,
                        name,
                        address,
                    },
                };
            } else if (media_type === "text") {
                message.content.template.media = {media_type, text_header_title};
            } else {
                message.content.template.media = {media_type, media_url};
            }
        }
        if (lto_expiration_time_ms) {
            message.content.template.limited_time_offer = {
                expiration_time_ms: lto_expiration_time_ms,
            };
        }
        if (coupon_code) {
            message.content.template.buttons = {
                coupon_code: [
                    {
                        index: 0,
                        type: "copy_code",
                        coupon_code,
                    },
                ],
            };
        }

        if (coupon_code) {
            message.content.template.buttons = {
                coupon_code: [
                    {
                        index: 0,
                        type: "copy_code",
                        coupon_code,
                    },
                ],
            };
        }

        if (coupon_code) {
            message.content.template.buttons = {
                coupon_code: [
                    {
                        index: 0,
                        type: "copy_code",
                        coupon_code,
                    },
                ],
            };
        }

        if (actions) {
            message.content.template.buttons = {
                actions: actions
            }
        }

        if (quick_replies) {
            message.content.template.buttons = {
                quick_replies: quick_replies
            }
        }

        if (carousel_cards) {
            message.content.template.carousel = {
                cards: carousel_cards
            }
        }
        return this._sendMessage(message);
    }


    async sendWhatsAppInteractiveMessage({
                                             originator,
                                             recipient,
                                             interactive_type,
                                             header_type,
                                             header_text,
                                             header_link,
                                             header_file_name,
                                             body_text,
                                             footer_text,
                                             parameters,
                                             sections,
                                             buttons,
                                             list_button_text
                                         }) {
        const message = {
            originator,
            recipients: [{recipient}],
            content: {
                message_type: "INTERACTIVE",
                interactive: {
                    type: interactive_type,
                    header: {
                        type: header_type
                    },
                    body: {
                        text: body_text
                    },
                    footer: {
                        text: footer_text
                    }
                },
            },
        };

        if (header_type === "text") {
            message.content.interactive.header.text = header_text;
        } else if (["image", "video", "document"].includes(header_type)) {
            message.content.interactive.header[header_type] = {
                filename: header_type === "document" ? header_file_name : null,
                link: header_link
            };
        }
        if (interactive_type === "cta_url") {
            message.content.interactive.action = {
                parameters: parameters,
            };
        }
        else if (interactive_type === "button") {
            message.content.interactive.action = {
                buttons: buttons,
            };
        }
        else if (interactive_type === "list") {
            message.content.interactive.action = {
                sections: sections,
                button: list_button_text
            };
        }
        else if (interactive_type === "location_request_message"){
            message.content.interactive.action = {
                name: "send_location"
            };
        }
        else if (interactive_type === "address_message"){
            message.content.interactive.action = {
                parameters: parameters
            };
        }
        return this._sendMessage(message);
    }

    async getStatus({request_id}) {
        try {
            const response = await this.client.get(
                `/whatsapp/v1/report/${request_id}`
            );
            console.log("WhatsApp message status retrieved successfully.");
            return response;
        } catch (error) {
            console.log(`Error getting WhatsApp message status: ${error}`);
            throw error;
        }
    }

    async readReceipt({message_id}) {
        try {
            const response = await this.client.post(
                `/whatsapp/v2/read-receipt/${message_id}`
            );
            console.log("WhatsApp message marked as read successfully.");
            return response;
        } catch (error) {
            console.log(`Error getting message read receipt: ${error}`);
            throw error;
        }
    }

    async _sendMessage(message) {
        try {
            const response = await this.client.post("/whatsapp/v2/send", {
                messages: [message],
            });
            console.log("WhatsApp message sent successfully.");
            return response;
        } catch (error) {
            console.log(`Error sending WhatsApp message: ${error}`);
            throw error;
        }
    }
}

module.exports = WHATSAPP;
