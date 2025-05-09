export interface UserAccountToCreate {
  pseudo: string;
  email: string;
  password: string;
}

export interface UserAccountRepository {
  createUserAccount(userAccountToCreate: UserAccountToCreate): Promise<void>;
}
