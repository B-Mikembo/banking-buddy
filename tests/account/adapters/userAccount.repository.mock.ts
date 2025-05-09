import type { UserAccountRepository, UserAccountToCreate } from '~/domains/account/ports/userAccount.repository';

export class UserAccountRepositoryMock implements UserAccountRepository {
  private _createUserAccountArgs?: { pseudo: string; email: string; password: string };

  get createUserAccountArgs(): { pseudo: string; email: string; password: string } | undefined {
    return this._createUserAccountArgs;
  }

  createUserAccount(userAccountToCreate: UserAccountToCreate): Promise<void> {
    this._createUserAccountArgs = userAccountToCreate;
    return Promise.resolve();
  }
}
