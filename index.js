const axios = require('axios');

const config = {
  baseURL: 'https://prime.exchangerate-api.com/v5',
};

class ExchangeRateApi {
  constructor(apiKey) {
    this.api = axios.create(config);
    this.apiKey = apiKey;
  }

  async latest(base) {
    let data = {};
    try {
      const response = await this.api.get(`/${this.apiKey}/latest/${base}`);
      data = response.data;
    } catch (error) {
      if (error.response) {
        data = {
          result: 'error',
          error: `The request was made and the server responded with a status code that falls out of the range of 2xx. Status: ${error.response.status}`,
        };
      } else if (error.request) {
        data = {
          result: 'error',
          error: 'The request was made but no response was received.',
        };
      } else {
        data = {
          result: 'error',
          error: 'Something happened in setting up the request that triggered an Error',
        };
      }
    }
    return data;
  }
}

module.exports = ExchangeRateApi;
