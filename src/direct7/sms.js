class SMS {
  constructor(client) {
    this.client = client;
  }

  async sendMessage(recipients, content, originator, reportUrl = null, unicode = false) {
    const message = {
      channel: 'sms',
      recipients,
      content,
      msgType: 'text',
      dataCoding: unicode ? 'unicode' : 'text',
    };

    const messageGlobals = {
      originator,
      reportUrl,
    };

    try {
      const response = await this.client.post('/messages/v1/send', {
        messages: [message],
        messageGlobals,
      });
      
      console.log('Message sent successfully.');
      return response;
    } catch (error) {
      console.log(`Error sending message: ${error.message}`);
      throw error;
    }
  }

  async getStatus(requestId) {
    try {
      const response = await this.client.get(`/report/v1/message-log/${requestId}`);
      console.log('Message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Error getting message status: ${error.message}`);
      throw error;
    }
  }
}

module.exports = SMS;