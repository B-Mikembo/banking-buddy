export interface AuthenticatedUser {
  id: UserId;
  email: string;
}

export type UserId = string;

export interface UserRepository {
  signInUser(email: string, password: string): Promise<void>;
  getCurrentUser(): Promise<AuthenticatedUser>;
}
