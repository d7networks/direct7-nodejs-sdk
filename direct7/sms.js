class SMS {
    constructor(client) {
      this.client = client;
    }
  
    async sendMessage({recipients, content, originator, report_url, unicode=false}) {
      const message = {
        channel: 'sms',
        recipients,
        content,
        msg_type: 'text',
        data_coding	: unicode ? 'unicode' : 'text',
      };
  
      const messageGlobals = {
        originator,
        report_url,
      };
  
      try {
        const response = await this.client.post('/messages/v1/send', {
          messages: [message],
          messageGlobals: messageGlobals,
        });
        
        console.log('Message sent successfully.');
        return response;
      } catch (error) {
        console.log(`Error sending message: ${error}`);
        throw error;
      }
    }
  
    async getStatus({request_id}) {
      try {
        const response = await this.client.get(`/report/v1/message-log/${request_id}`);
        console.log('Message status retrieved successfully.');
        return response;
      } catch (error) {
        console.log(`Error getting message status: ${error}`);
        throw error;
      }
    }
  }
  
  module.exports = SMS;