export interface UserRepository {
  signInUser(email: string, password: string): Promise<void>;
}
