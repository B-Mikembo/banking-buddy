import type { UserRepository } from '~/domains/authentication/ports/user.repository';

export class SpyUserRepository implements UserRepository {
  private _signInUserArgs: { email: string; password: string } | null = null;

  get signInUserArgs(): { email: string; password: string } | null {
    return this._signInUserArgs;
  }

  constructor() {}

  signInUser(email: string, password: string): Promise<void> {
    this._signInUserArgs = { email, password };
    return Promise.resolve();
  }
}
