import type { AuthenticationResult } from '../authenticateUser.usecase';

export interface AuthenticationResultPresenter {
  show(cas: AuthenticationResult): void;
}
