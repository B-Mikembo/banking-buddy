import { CreateAccountPresenter } from '../ports/createAccountPresenter';
import { AccountRouteName } from '~/router/account/accountNameRoute';

interface CreateAccountViewModel {
  route: string;
}

export class CreateAccountPresenterImpl implements CreateAccountPresenter {
  constructor(private createAccountViewModel: (viewModel: CreateAccountViewModel) => void) {}

  show() {
    this.createAccountViewModel({
      route: AccountRouteName.SIGN_UP /* déterminer la route de la page de connexion */,
    });
  }
}
