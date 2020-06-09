const axios = require('axios');

class HttpService {
  constructor() {
    this.url = process.env.REACT_APP_BACKEND_URL;
    this.port = process.env.REACT_APP_BACKEND_PORT;
  }

  async post(path, payload, credentials) {
    let success;
    let message;
    try {
      const options = { withCredentials: credentials || false };
      const response = await axios.post(
        `${this.url}:${this.port}/${path}`,
        payload,
        options,
      );
      success = true;
      message = response.data;
    } catch (error) {
      success = false;
      message = error.response && error.response.data ? error.response.data : 'No response';
    }
    return { success, message };
  }

  // TODO: get method
}

const httpService = new HttpService();

export { httpService as HttpService };
