import type { AuthUser } from './user.repository';

export interface AuthUserPresenter {
  show(id: AuthUser): void;
}
