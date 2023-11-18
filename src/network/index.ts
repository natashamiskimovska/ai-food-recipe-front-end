import { AuthApi } from "./Auth";
import { UserApi } from "./User";

class Api {
  Auth = new AuthApi();
  User = new UserApi();
}

export const API = new Api();