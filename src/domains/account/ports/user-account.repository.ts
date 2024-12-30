export interface UserAccount {
  id: string;
  lastname: string;
  email: string;
  firstname: string;
}

export interface TemporaryAccount {
  email: string;
}

export interface UserAccountToCreate {
  email: string;
  password: string;
}

export interface UserAccountRepository {
  createUserAccount(userAccountToCreate: UserAccountToCreate): Promise<TemporaryAccount>
}
