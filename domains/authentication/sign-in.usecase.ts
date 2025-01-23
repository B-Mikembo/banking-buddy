import type { UserRepository } from './ports/user.repository';

export class SignInUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string, password: string): Promise<void> {}
}
