export interface AuthUser {
  id: UserId;
  email: string;
}

export type UserId = string;

export interface UserRepository {
  signInUser(email: string, password: string): Promise<void>;
  getCurrentUser(): Promise<AuthUser>;
}
