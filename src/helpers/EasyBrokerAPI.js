'use strict';

module.exports = class EasyBrokerAPI {
  constructor(apiKey, perPage = 20) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.stagingeb.com/v1';
    this.perPage = perPage;
  }

  async getProperties(page = 1) {
    const url = `${this.baseUrl}/properties?page=${page}&limit=${this.perPage}`;
    const response = await fetch(url, {
      headers: {
        'X-Authorization': `${this.apiKey}`
      }
    });

    if (!response.ok) {
      throw new Error(`Request error with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}