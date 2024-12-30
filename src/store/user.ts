import { defineStore } from "pinia";
import { User } from "../domains/authentication/ports/user.repository";

export interface UserStore {
  user: User;
};

export const userStore = defineStore('user', {
  state: (): UserStore => ({
    user: {
      id: '',
      lastname: '',
      firstname: '',
      email: '',
      onboardingDone: false,
      token: ''
    }
  }),
  actions: {
    setUser(user: Partial<User>) {
      this.user = {
        ...this.user,
        ...user
      };
    },
    reset() {
      this.$reset();
    },
  },
  persist: {
    storage: localStorage,
  },
});
