import type { SessionRepository } from '~/domains/authentication/ports/session.repository';
import type { User } from '~/domains/authentication/ports/user.repository';

export class SpySaveUserSessionRepository implements SessionRepository {
  private _user: User = {
    id: '',
    email: '',
  };

  get user(): User {
    return this._user;
  }

  static anUser(user?: Partial<User>): SpySaveUserSessionRepository {
    const repository = new SpySaveUserSessionRepository();
    repository.saveUser({ ...user });
    return repository;
  }

  saveUser(user: Partial<User>): void {
    this._user = {
      ...this._user,
      ...user,
    };
  }
}
