import { describe, expect, it } from 'vitest';
import { SpyUserRepository } from './adapters/user.repository.spy';
import { SignInUsecase } from '../../domains/authentication/sign-in.usecase';

describe('As customer, I want to sign in, so I can enjoy application services', () => {
  it('Given correct email and password When I sign in Then I can access to application services', async () => {
    const spyUserRepository = new SpyUserRepository();
    const usecase = new SignInUsecase(spyUserRepository);
    await usecase.execute('john.doe@example.com', '123');
    expect(spyUserRepository.signInUserArgs).toStrictEqual({
      email: 'john.doe@example.com',
      password: '123',
    });
  });
});
