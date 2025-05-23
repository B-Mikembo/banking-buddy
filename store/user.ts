import { defineStore } from 'pinia';
import type { User } from '~/domains/authentication/ports/user.repository';

export interface UserStore {
  user: User;
}

export const userStore = defineStore('user', {
  state: (): UserStore => ({
    user: {
      id: '',
      email: '',
      token: '',
    },
  }),
  actions: {
    setUser(user: Partial<User>) {
      this.user = {
        ...this.user,
        ...user,
      };
    },
  },
});
