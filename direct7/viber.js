class VIBER {
  constructor(client) {
    this.client = client;
  }

  async sendViberMessage(recipients, content, label, originator, callBackUrl = null) {
    const message = {
      channel: 'viber',
      recipients,
      content,
      label,
    };

    const messageGlobals = {
      originator,
      callBackUrl,
    };

    try {
      const response = await this.client.post('/viber/v1/send',  {
        messages: [message],
        messageGlobals,
      });

      console.log('Viber message sent successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to send Viber message: ${error.message}`);
      throw error;
    }
  }

  async getStatus(requestId) {
    try {
      const response = await this.client.get(`/report/v1/viber-log/${requestId}`);
      console.log('Viber message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to retrieve Viber message status: ${error}`);
      throw error;
    }
  }
}

module.exports = VIBER;
