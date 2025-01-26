import type { AuthUserPresenter } from "./ports/auth-user.presenter";
import type { UserRepository } from "./ports/user.repository";

export class GetCurrentUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(presenter: AuthUserPresenter) {
    const authUser = await this.userRepository.getCurrentUser();
    presenter.show(authUser);
  }
}