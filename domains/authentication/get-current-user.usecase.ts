import type { UserRepository } from "./ports/user.repository";

export class GetCurrentUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    
  }
}