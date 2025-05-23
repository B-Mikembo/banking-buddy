import { describe, expect, it } from 'vitest';
import { SpySaveUserSessionRepository } from '../account/sessionRepository.saveUser.spy';
import { AuthenticateUserUsecase } from '~/domains/authentication/authenticateUser.usecase';
import { UserAccountRepositoryMock } from '../account/adapters/userAccount.repository.mock';
import { UserRepositoryMock } from './adapters/user.repository.mock';
import { AuthenticationResultPresenterImpl } from '~/domains/authentication/adapters/authenticationResultPresenterImpl';
import type { User } from '~/domains/authentication/ports/user.repository';

describe('Authentication file test', () => {
  it('save user session when authentication is validated', async () => {
    //  Arrange
    const spySessionRepository = SpySaveUserSessionRepository.anUser();
    const usecase = new AuthenticateUserUsecase(UserRepositoryMock.newInstance(), spySessionRepository);

    //  Act
    await usecase.execute('w@w.com', '#1234567890HAHAa', new AuthenticationResultPresenterImpl(() => {}));

    //  Assert
    expect(spySessionRepository.user).toStrictEqual<User>({
      id: 'id',
      email: 'w@w.com',
      token: 'token',
    });
  });

  it('redirect user to home when authentication is validated', async () => {
    //  Arrange
    const spySessionRepository = SpySaveUserSessionRepository.anUser();
    const usecase = new AuthenticateUserUsecase(UserRepositoryMock.newInstance(), spySessionRepository);

    //  Act
    await usecase.execute('w@w.com', '#1234567890HAHAa', new AuthenticationResultPresenterImpl(expectToto));

    //  Assert
    function expectToto(viewModel: string) {
      expect(viewModel).toEqual('/');
    }
  });
});
