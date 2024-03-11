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
    birthday,
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
    body,
  }) {
    const message = {
      originator,
      recipients: [{ recipient }],
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
          },
          birthday,
          phones: phones ? phones.map((phone) => ({ phone })) : null,
          emails: emails ? emails.map((email) => ({ email })) : null,
          urls: urls ? urls.map((url) => ({ url })) : null,
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
      message.content.attachment = {
        type,
        url,
        caption,
      };
    } else if (message_type === "TEXT") {
      message.content.text = {
        body,
      };
    }

    return this._sendMessage(message);
  }

  async sendWhatsAppTemplatedMessage({
    originator,
    recipient,
    template_id,
    body_parameter_values,
    media_type,
    media_url,
    latitude,
    longitude,
    location_name,
    location_address,
    lto_expiration_time_ms,
    coupon_code,
    actions,
    quick_replies,
    carousel_cards,
  }) {
    const message = {
      originator,
      recipients: [{ recipient }],
      content: {
        message_type: "TEMPLATE",
        template: { template_id, body_parameter_values },
      },
    };

    if (media_type) {
      if (media_type === "location") {
        message.content.template.media = {
          media_type: "location",
          location: {
            latitude,
            longitude,
            name: location_name,
            address: location_address,
          },
        };
      } else {
        message.content.template.media = { media_type, media_url };
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

    if (actions){
      message.content.template.buttons = {
        actions: actions
      }
    }

    if (quick_replies){
      message.content.template.buttons = {
            quick_replies: quick_replies
        }
    }

    if (carousel_cards){
      message.content.template.carousel = {
        cards: carousel_cards
        }
    }
    return this._sendMessage(message);
  }

  async getStatus({ request_id }) {
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
