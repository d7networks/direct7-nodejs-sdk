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
    display_name,
    phone,
    email,
    url,
    latitude,
    longitude,
    location_name,
    location_address,
    attachment_type,
    attachment_url,
    attachment_caption,
    message_text,
  }) {
    const message = {
      originator,
      recipients: [{ recipient }],
      content: {
        message_type,
      },
    };

    if (message_type === 'CONTACTS') {
      message.content.contact = {
        first_name,
        last_name,
        display_name,
        phone,
        email,
        url,
      };
    } else if (message_type === 'LOCATION') {
      message.content.location = {
        latitude,
        longitude,
        name: location_name,
        address: location_address,
      };
    } else if (message_type === 'ATTACHMENT') {
      message.content.attachment = {
        attachment_type,
        attachment_url,
        attachment_caption,
      };
    } else if (message_type === 'TEXT') {
      message.content.message_text = message_text;
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
  }) {
    const message = {
      originator,
      recipients: [{ recipient }],
      content: {
        message_type: 'TEMPLATE',
        template: { template_id, body_parameter_values },
      },
    };

    if (media_type) {
      if (media_type === 'location') {
        message.content.template.media = {
          media_type: 'location',
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

    return this._sendMessage(message);
  }

  async getWhatsAppStatus(request_id) {
    try {
      const response = await this.client.get(`/whatsapp/v1/report/${request_id}`);
      console.log('WhatsApp message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Error getting WhatsApp message status: ${error}`);
      throw error;
    }
  }

  async _sendMessage(message) {
    try {
      const response = await this.client.post('/whatsapp/v1/send', { messages: [message] });
      console.log('WhatsApp message sent successfully.');
      return response;
    } catch (error) {
      console.log(`Error sending WhatsApp message: ${error}`);
      throw error;
    }
  }
}

module.exports = WHATSAPP;
