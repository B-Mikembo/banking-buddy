import type { Router } from 'vue-router';
import type { AuthUserPresenter } from '../ports/auth-user.presenter';
import type { AuthUser } from '../ports/user.repository';

export class AuthUserPresenterImpl implements AuthUserPresenter {
  constructor(private readonly routeViewModel: (viewModel: string) => void) {}

  show(authUser: AuthUser): void {
    if(authUser) {
      this.routeViewModel('/')
    } else {
      this.routeViewModel('/auth/sign-in');
    }
  }
}
