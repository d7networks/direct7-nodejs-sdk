class NUMBER_LOOKUP {
  constructor(client) {
    this.client = client;
  }

  async searchNumberDetails(recipient) {
    const params = {
      recipient
    };

    try {
      const response = await this.client.post('/hlr/v1/lookup', { params: params });
      console.log('Search request is successful.');
      return response;
    } catch (error) {
      console.log(`Failed to perform number lookup: ${error}`);
      throw error;
    }
  }
}

module.exports = NUMBER_LOOKUP;
