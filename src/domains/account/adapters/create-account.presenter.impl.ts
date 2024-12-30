import { RouteAccountName } from "@/router/compte/routeAccountName";
import { RouteBankName } from "../../../router/bank/route-bank-name";
import { CreateAccountPresenter } from "../ports/create-user-account.presenter";

interface CreateAccountViewModel {
  route: string;
}

export class CreateAccountPresenterImpl implements CreateAccountPresenter {
  constructor(private createAccountViewModel: (viewModel: CreateAccountViewModel) => void){}

  show(): void {
    this.createAccountViewModel({
      route: RouteAccountName.ACCOUNT_VALIDATION
    })
  }

}