import type { SessionRepository } from '../ports/session.repository';
import type { User } from '../ports/user.repository';
import { userStore } from '~/store/user';

export class SessionRepositoryStore implements SessionRepository {
  saveUser(user: Partial<User>): void {
    const store = userStore();
    store.setUser({
      ...store.user,
      ...user,
    });
  }
}
