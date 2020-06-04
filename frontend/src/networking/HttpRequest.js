const axios = require('axios');

class HttpService {
  constructor() {
    this.url = process.env.REACT_APP_BACKEND_URL;
    this.port = process.env.REACT_APP_BACKEND_PORT;
  }

  async post(path, options) {
    let success;
    let message;
    try {
      const response = await axios.post(
        `${this.url}:${this.port}/${path}`,
        options,
      );
      success = true;
      message = response.data;
    } catch (error) {
      success = false;
      if (!error.response) {
        message = 'No response';
      } else {
        message = error.response.data || 'No info';
      }
    }
    return { success, message };
  }

  async get(path, payload) {
    try {
      const response = await axios.get(
        `${this.url}:${this.port}/${path}`,
        payload,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

const httpService = new HttpService();

export { httpService as HttpService };
