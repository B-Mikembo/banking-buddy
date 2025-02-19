import { describe, expect, it, test } from 'vitest';
import { SpyUserRepository } from './adapters/user.repository.spy';


describe('Sign In Tests', () => {
  it('should process sign in when I give email and password', async() => {
    const spyUserRepository = new SpyUserRepository();
    expect(false).toBe(true);
  })
});
