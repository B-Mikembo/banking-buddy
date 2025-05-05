import type { CreateAccountPresenter } from "../ports/createAccountPresenter";

interface CreateAccountViewModel {
  route: string;
}

export class CreateAccountPresenterImpl implements CreateAccountPresenter {
  constructor(private createAccountViewModel: (viewModel: CreateAccountViewModel) => void) {}

  show() {
    this.createAccountViewModel({
      route: 'home' /* déterminer la route de la page de connexion */
    });
  }
}