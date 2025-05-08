import { describe, expect, it } from 'vitest';
import { CreateUserAccountUsecase, type UserInput } from '~/domains/account/create-user-account.usecase';
import { UserAccountRepositoryMock } from './adapters/userAccount.repository.mock';
import { CreateAccountPresenterImpl } from '~/domains/account/adapters/createAccountPresenterImpl';

describe('create user file test', () => {
  it('should create new user and redirect to login page', async () => {
    //  GIVEN
    const accountToCreate: UserInput = {
      firstName: 'Bob',
      email: 'w@w.com',
      password: 'password',
    };
    const userAccountRepository = new UserAccountRepositoryMock();
    //  WHEN / THEN
    const usecase = new CreateUserAccountUsecase(userAccountRepository);
    await usecase.execute(
      new CreateAccountPresenterImpl(viewModel => {
        expect(viewModel.route).toBe('sign-in');
      }),
      accountToCreate
    );
  });
});
