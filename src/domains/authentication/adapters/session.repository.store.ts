import { SessionRepository } from "../authenticate-user.usecase";
import { User } from "../ports/user.repository";

export class SessionRepositoryStore implements SessionRepository {
  saveUser(user: Partial<User>): void {
    throw new Error("Method not implemented.");
  }

}