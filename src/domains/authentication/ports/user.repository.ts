export interface User {
  lastname: string;
  id: string;
  firstname: string;
  email: string;
  onboardingDone: boolean;
  token?: string;
}

export interface UserRepository {
  authenticateUser(email: string, password: string): Promise<void>;
}