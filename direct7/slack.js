class SLACK {
  constructor(client) {
    this.client = client;
  }

  async sendSlackMessage(content, work_space_name, channel_name, reportUrl = null) {
    const message = {
      channel: 'slack',
      content,
      work_space_name,
      channel_name,
    };

    const messageGlobals = {
      report_url: reportUrl,
    };

    try {
      const response = await this.client.post('/messages/v1/send', {
          messages: [message],
          message_globals: messageGlobals,
      });

      console.log('Slack message sent successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to send Slack message: ${error}`);
      throw error;
    }
  }

  async getStatus(requestId) {
    try {
      const response = await this.client.get(`/report/v1/message-log/${requestId}`);
      console.log('Slack message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to retrieve Slack message status: ${error}`);
      throw error;
    }
  }
}

module.exports = SLACK;
