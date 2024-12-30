import { User, UserRepository } from "./ports/user.repository";

export interface SessionRepository {
  saveUser(user: Partial<User>): void;
}

export class AuthenticateUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(email: string, password: string): Promise<void> {
    await this.userRepository.authenticateUser(email, password);
  }
}