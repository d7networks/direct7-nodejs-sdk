const axios = require('axios');
const SMS = require('./direct7/sms');
const VERIFY = require('./direct7/verify');
const VIBER = require('./direct7/viber');
const SLACK = require('./direct7/slack');
const NUMBER_LOOKUP = require('./direct7/number_lookup.js');
const WHATSAPP = require('./direct7/whatsapp.js');
const {} = require('./errors.js');

class Client {
  constructor(apiToken, timeout = 30, poolConnections = 10, poolMaxSize = 10, maxRetries = 3) {
    this.apiToken = apiToken;
    this.host = 'https://api.d7networks.com';

    this.headers = {
      'User-Agent': `direct7-node-sdk node/${process.version}`,
      Accept: 'application/json',
    };

    this.timeout = timeout;
    this.axiosInstance = axios.create({
      baseURL: this.host,
      timeout: this.timeout * 1000,
      headers: this.headers,
    });

    this.sms = new SMS(this);
    this.verify = new VERIFY(this);
    this.viber = new VIBER(this);
    this.slack = new SLACK(this);
    this.number_lookup = new NUMBER_LOOKUP(this);
    this.whatsapp = new WHATSAPP(this);
  }

  createBearerTokenString() {
    return `Bearer ${this.apiToken}`;
  }

  async processResponse(response) {
    if (response.status === 401) {
        throw new AuthenticationError('Invalid API token');
    } else if (response.status >= 200 && response.status < 300) {
        try {
            return response.data;
        } catch (error) {
            throw new Error(`Failed to parse response data: ${error.message}`);
        }
    } else if (response.status >= 400 && response.status < 500) {
        const errorData = response.data || {};
        if (response.status === 400) {
            throw new BadRequest(`Bad request: ${JSON.stringify(errorData)}`);
        } else if (response.status === 404) {
            throw new NotFoundError(`Not found: ${JSON.stringify(errorData)}`);
        } else if (response.status === 402) {
            throw new InsufficientCreditError(`Insufficient credit: ${JSON.stringify(errorData)}`);
        } else if (response.status === 422) {
            throw new ValidationError(`Validation error: ${JSON.stringify(errorData)}`);
        } else {
            throw new ClientError(`Client error: ${response.status} ${JSON.stringify(errorData)}`);
        }
    } else if (response.status >= 500 && response.status < 600) {
        throw new ServerError(`Server error: ${response.status} ${JSON.stringify(response.data)}`);
    } else {
        throw new Error(`Unexpected response: ${response.status} ${JSON.stringify(response.data)}`);
    }
}

  async get(path, params = {}) {
    try {
      const response = await this.axiosInstance.get(path, {
        headers: {
          ...this.headers,
          Authorization: this.createBearerTokenString(),
        },
        params,
      });

      return this.processResponse(response);
    } catch (error) {
      throw new Error(`Failed to make GET request: ${error}`);
    }
  }

  async post(path, data, bodyIsJson = true) {
    try {
      const headers = {
        ...this.headers,
        Authorization: this.createBearerTokenString(),
      };

      if (bodyIsJson) {
        headers['Content-Type'] = 'application/json';
      } else {
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }

      const response = await this.axiosInstance.post(path, data, { headers });

      return this.processResponse(response);
    } catch (error) {
      throw new Error(`Failed to make POST request: ${error}`);
    }
  }

  // Implement other HTTP methods (put, delete, patch)
}

module.exports = Client;