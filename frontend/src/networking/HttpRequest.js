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
      message = error.response.data;
    }
    return { success, message };
  }

  // TODO: get method
}

export { HttpService };
