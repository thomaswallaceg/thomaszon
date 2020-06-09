import { HttpService } from './HttpRequest';

const loginRoute = 'login';
const logoutRoute = 'logout';
const registerRoute = 'register';

class SessionController {
  static async login(username, password) {
    const { success, message } = await HttpService.post(
      loginRoute,
      { username, password },
      true,
    );
    return { success, message };
  }

  static async register(username, password) {
    const { success, message } = await HttpService.post(
      registerRoute,
      { username, password },
      true,
    );
    return { success, message };
  }

  static async logout() {
    const { success, message } = await HttpService.post(
      logoutRoute,
      {},
      true,
    );
    return { success, message };
  }
}

export { SessionController };
