import type { CreateAccountPresenter } from './ports/createAccountPresenter';
import type { UserAccountRepository } from './ports/userAccount.repository';

export interface UserInput {
  firstName: string;
  email: string;
  password: string;
}

export class CreateUserAccountUsecase {
  constructor(private userAccountRepository: UserAccountRepository) {}

  async execute(createAccountPresenter: CreateAccountPresenter, userAccountToCreateInput: UserInput): Promise<void> {
    await this.userAccountRepository.createUserAccount({
      firstName: userAccountToCreateInput.email,
      email: userAccountToCreateInput.email,
      password: userAccountToCreateInput.password,
    });
    createAccountPresenter.show();
  }
}
