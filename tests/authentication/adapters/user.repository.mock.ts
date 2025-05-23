import type { User, UserRepository } from '~/domains/authentication/ports/user.repository';

export class UserRepositoryMock implements UserRepository {
  static newInstance(): UserRepositoryMock {
    return new UserRepositoryMock();
  }

  authenticateUser(email: string, password: string): Promise<User> {
    return Promise.resolve<User>({
      id: 'id',
      email: email,
      token: 'token',
    });
  }
}
