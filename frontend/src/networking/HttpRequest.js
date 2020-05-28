const axios = require('axios');

class HttpService {
  constructor() {
    this.url = process.env.REACT_APP_BACKEND_URL;
    this.port = process.env.REACT_APP_BACKEND_PORT;
  }

  async post(path, options) {
    const response = await axios.post(
      `${this.url}:${this.port}/${path}`,
      options,
    );
    const success = response.status === 200;
    return { success, message: response.data };
  }

  // TODO: get method
}

export { HttpService };
