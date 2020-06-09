import { HttpService } from './HttpRequest';

const loginRoute = 'login';

class LoginController {
  static async login(username, password) {
    const { success, message } = await HttpService.post(loginRoute, { username, password }, true);
    return { success, message };
  }
}

export { LoginController };
