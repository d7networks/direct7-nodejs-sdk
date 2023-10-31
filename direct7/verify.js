class VERIFY {
  constructor(client) {
    this.client = client;
  }

  async sendOTP({
    originator,
    recipient,
    content,
    data_coding,
    expiry,
    template_id,
  }) {
    const params = template_id
      ? {
          originator,
          recipient,
          template_id,
        }
      : {
          originator,
          recipient,
          content,
          expiry,
          data_coding,
        };

    return this._sendRequest('/verify/v1/otp/send-otp', params, 'OTP Message sent successfully.');
  }

  async resendOTP({otp_id}) {
    const params = {
      otp_id,
    };

    return this._sendRequest('/verify/v1/otp/resend-otp', params, 'OTP Message Re-sent successfully.');
  }

  async verifyOTP({otp_id, otp_code}) {
    const params = {
      otp_id,
      otp_code,
    };

    return this._sendRequest('/verify/v1/otp/verify-otp', params, 'OTP Message verified successfully.');
  }

  async _sendRequest(endpoint, params, successMessage) {
    try {
      const response = await this.client.post(endpoint, params);
      console.log(successMessage);
      return response;
    } catch (error) {
      console.log(`Error: ${error}`);
      throw error;
    }
  }


  async getStatus({otp_id}) {
    try {
      const response = await this.client.get(`/verify/v1/report/${otp_id}`);
      console.log('OTP Message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Error: ${error}`);
      throw error;
    }
  }
}
module.exports = VERIFY;
