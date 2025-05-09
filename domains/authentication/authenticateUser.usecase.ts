import type { AuthenticationResultPresenter } from './ports/authenticationResultPresenter';
import type { SessionRepository } from './ports/session.repository';
import type { UserRepository } from './ports/user.repository';

export enum AuthenticationResult {
  CAN_LOGIN = 'can_login',
}

export class AuthenticateUserUsecase {
  constructor(private userRepository: UserRepository, private sessionRepsitory: SessionRepository) {}

  async execute(
    email: string,
    password: string,
    authenticationResultPresenter: AuthenticationResultPresenter
  ): Promise<void> {
    const user = await this.userRepository.authenticateUser(email, password);
    this.sessionRepsitory.saveUser(user);

    authenticationResultPresenter.show(AuthenticationResult.CAN_LOGIN);
  }
}
