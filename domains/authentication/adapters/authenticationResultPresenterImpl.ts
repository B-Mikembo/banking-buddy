import { AuthenticationResult } from '../authenticateUser.usecase';
import type { AuthenticationResultPresenter } from '../ports/authenticationResultPresenter';

export class AuthenticationResultPresenterImpl implements AuthenticationResultPresenter {
  constructor(private readonly routeViewModel: (viewModel: string) => void) {}

  show(cas: string): void {
    switch (cas) {
      case AuthenticationResult.CAN_LOGIN:
        this.routeViewModel('/');
        break;
    }
  }
}
