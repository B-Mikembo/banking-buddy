import { describe, expect, it, test } from 'vitest';
import { SpyUserRepository } from './adapters/user.repository.spy';
import { SignInUsecase } from '~/domains/authentication/signIn.usecase';

describe('Sign In Tests', () => {
  it('should process sign in when I give email and password', async () => {
    const spyUserRepository = new SpyUserRepository();
    const usecase = new SignInUsecase(spyUserRepository);
    await usecase.execute('john.doe@gmail.com', '123');
    expect(spyUserRepository.signInUserArgs).toStrictEqual({
      email: 'john.doe@gmail.com',
      password: '123',
    });
  });
});
