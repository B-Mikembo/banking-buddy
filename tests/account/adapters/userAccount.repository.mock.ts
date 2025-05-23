import type { UserAccountRepository, UserAccountToCreate } from '~/domains/account/ports/userAccount.repository';

export class UserAccountRepositoryMock implements UserReposi {
  
  createUserAccount(userAccountToCreate: UserAccountToCreate): Promise<void> {
    return Promise.resolve();
  }
}
