import { SessionRepository } from "../authentication/authenticate-user.usecase";
import { CreateAccountPresenter } from "./ports/create-user-account.presenter";
import { UserAccountRepository } from "./ports/user-account.repository";

export interface UserInput {
  email: string;
  password: string;
}

export class CreateUserAccountUsecase {
  constructor(private userAccountRepository: UserAccountRepository, private sessionRepository: SessionRepository) {}
  async execute(createAccountPresenter: CreateAccountPresenter, userInput: UserInput): Promise<void> {
    const createdUser = await this.userAccountRepository.createUserAccount({
      email: userInput.email,
      password: userInput.password
    });

    this.sessionRepository.saveUser({
      email: createdUser.email,
    });
    createAccountPresenter.show();
  }
}