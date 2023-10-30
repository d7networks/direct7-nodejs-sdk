class NUMBER_LOOKUP {
  constructor(client) {
    this.client = client;
  }

  async searchNumberDetails(recipient) {
    try {
      const response = await this.client.post('/hlr/v1/lookup', {
        recipient: recipient
      });
      
      console.log('Search request is success.');
      return response;
    } catch (error) {
      console.log(`Error search number: ${error}`);
      throw error;
    }
  }
}

module.exports = NUMBER_LOOKUP;
