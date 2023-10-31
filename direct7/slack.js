class SLACK {
  constructor(client) {
    this.client = client;
  }

  async sendSlackMessage({content, work_space_name, channel_name, report_url}) {
    const message = {
      channel: 'slack',
      content,
      work_space_name,
      channel_name,
    };

    const messageGlobals = {
      report_url
      };

    try {
        const response = await this.client.post('/messages/v1/send', {
          messages: [message],
          messageGlobals,
        });
        
        console.log('Slack Message sent successfully.');
        return response;
      } catch (error) {
        console.log(`Error sending Slack message: ${error}`);
        throw error;
      }
  }

  async getStatus({request_id}) {
    try {
      const response = await this.client.get(`/report/v1/message-log/${request_id}`);
      console.log('Slack message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to retrieve Slack message status: ${error}`);
      throw error;
    }
  }
}

module.exports = SLACK;
