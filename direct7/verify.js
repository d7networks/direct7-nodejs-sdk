const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

class VERIFY {
  constructor(client) {
    this.client = client;
  }

  async sendOtp(originator, recipient, content = null, dataCoding = null, expiry = null, templateId = null) {
    const params = templateId
      ? { originator, recipient, template_id: templateId }
      : { originator, recipient, content, expiry, data_coding: dataCoding };

    try {
      const response = await this.client.post('/verify/v1/otp/send-otp', { params });
      console.log('OTP Message sent successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to send OTP: ${error}`);
      throw error;
    }
  }

  async resendOtp(otpId) {
    const params = { otp_id: otpId };

    try {
      const response = await this.client.post('/verify/v1/otp/resend-otp', { params });
      console.log('OTP Message re-sent successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to resend OTP: ${error}`);
      throw error;
    }
  }

  async verifyOtp(otpId, otpCode) {
    const params = { otp_id: otpId, otp_code: otpCode };

    try {
      const response = await this.client.post('/verify/v1/otp/verify-otp', { params });
      console.log('OTP Message verified successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to verify OTP: ${error}`);
      throw error;
    }
  }

  async getStatus(otpId) {
    try {
      const response = await this.client.get(`/verify/v1/report/${otpId}`);
      console.log('OTP Message status retrieved successfully.');
      return response;
    } catch (error) {
      console.log(`Failed to retrieve OTP status: ${error}`);
      throw error;
    }
  }
}

module.exports = VERIFY;
