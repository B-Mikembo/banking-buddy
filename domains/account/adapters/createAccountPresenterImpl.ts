import { CreateAccountPresenter } from '../ports/createAccountPresenter';
import { CommonRouteName } from '~/router';

interface CreateAccountViewModel {
  route: string;
}

export class CreateAccountPresenterImpl implements CreateAccountPresenter {
  constructor(private createAccountViewModel: (viewModel: CreateAccountViewModel) => void) {}

  show() {
    this.createAccountViewModel({
      route: CommonRouteName.SIGN_IN /* déterminer la route de la page de connexion */,
    });
  }
}
