export interface User {
  id: string;
  email: string;
  token?: string;
}

export interface UserRepository {
  authenticateUser(email: string, password: string): Promise<User>;
}
