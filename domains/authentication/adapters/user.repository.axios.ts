import type { User, UserRepository } from "../ports/user.repository";
import { AxiosFactory } from "~/axios.factory";

interface UserApiModel {
  id: string;
  email: string;
}

interface LoginApiModel {
  user: UserApiModel;
  token: string;
}

export class UserRepositoryAxios implements UserRepository {
  async authenticateUser(email: string, password: string): Promise<User> {
    const axiosInstance = AxiosFactory.getAxios();
    const response = await axiosInstance.post<LoginApiModel>('/users/login', {
      email: email,
      password: password,
    });

    return {
      id: response.data.user.id,
      email: response.data.user.email,
      token: response.data.token,
    };
  }
}
