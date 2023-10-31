class VIBER {
  constructor(client) {
    this.client = client;
  }

  async sendViberMessage({recipients, content, label, originator, call_back_url}) {
    const message = {
      channel: 'viber',
      recipients,
      content,
      label,
    };

    const messageGlobal = {
      originator,
      call_back_url,
    };

    try {
        const response = await this.client.post('/viber/v1/send', {
          messages: [message],
          message_globals: messageGlobal,
        });
        
        console.log('Viber Message sent successfully.');
        return response;
      } catch (error) {
        console.log(`Error sending message: ${error}`);
        throw error;
      }
  }

  async getStatus({request_id}) {
    try {
      const response = await this.client.get(`/report/v1/viber-log/${request_id}`);
      console.log('Viber message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to retrieve Viber message status: ${error}`);
      throw error;
    }
  }
}

module.exports = VIBER;
