import type { AuthenticatedUser } from './user.repository';

export interface AuthUserPresenter {
  show(authUser: AuthenticatedUser): void;
}
