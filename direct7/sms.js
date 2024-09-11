class SMS {
    constructor(client) {
      this.client = client;
    }

    async sendMessage(originator, report_url, schedule_time, ...args) {
        // param args: dict - data dictionaries, each representing a message.
        //                  Each message dictionary should contain the following fields:
        //                         - recipients: list - Mobile Numbers to send SMS separated by comma in an array.
        //                         - content: str - The message content being sent.
        //                         - unicode: str - Coding type for the message (e.g., "true" or "false").
        // param originator: str - The Sender/Header of a message.
        // param report_url: str - Receive delivery status.
        // param schedule_time: str -Message Schedule time.
        // param unicode: boolean - To know the msg contain unicode data or not.

        const messages = args.map(message => {
            return {
                channel: 'sms',
                recipients: message.recipients || [],
                content: message.content || '',
                msg_type: 'text',
                data_coding: message.unicode ? 'unicode' : 'text'
            };
        });
        const messageGlobal = {
            originator,
            report_url,
            schedule_time
        };

        try {
            const response = await this.client.post('/messages/v1/send', {
                messages: messages,
                message_globals: messageGlobal,
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