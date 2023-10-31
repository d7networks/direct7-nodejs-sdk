class VERIFY {
  constructor(client) {
    this.client = client;
  }

  async sendOtp(originator, recipient, content = null, data_coding = null, expiry = null, template_id = null) {
    try {
      let response;
      if (template_id) {
        response = await this.client.post('/verify/v1/otp/send-otp', {
          originator,
          recipient,
          template_id
        });
      } else {
        response = await this.client.post('/verify/v1/otp/send-otp', {
          originator,
          recipient,
          content,
          expiry,
          data_coding
        });
      }
  
      console.log('OTP Message sent successfully.');
      return this.processResponse(response);  // Assuming you want to handle the response similarly to other requests
    } catch (error) {
      // Include a custom message along with the original error
      console.error('Failed to send OTP. Error:', error.message);
  
      // If available, log the response details for debugging
      if (error.response) {
        console.error('Response details:', error.response.data);
      }
  
      throw error;  // Throw the original error for better debugging
    }
  }

  async resendOtp(otp_id) {
    const params = { otp_id };

    try {
      const response = await this.client.post('/verify/v1/otp/resend-otp', {params});
      console.log('OTP Message re-sent successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to resend OTP: ${error}`);
      throw error;
    }
  }

  async verifyOtp(otp_id, otp_code) {
    const params = { otp_id, otp_code };

    try {
      const response = await this.client.post('/verify/v1/otp/verify-otp', {params} );
      console.log('OTP Message verified successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to verify OTP: ${error}`);
      throw error;
    }
  }

  async getStatus(otp_id) {
    try {
      const response = await this.client.get(`/verify/v1/report/${otp_id}`);
      console.log('OTP Message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to retrieve OTP status: ${error}`);
      throw error;
    }
  }
}

module.exports = VERIFY;
