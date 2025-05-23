import type { User } from "./user.repository";

export interface SessionRepository {
  saveUser(user: Partial<User>): void;
}
