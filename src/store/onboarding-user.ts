import { defineStore } from "pinia";

export interface OnboardingUserState {
  firstname: string;
};

export const onboardingUser = defineStore('onboardingUserState', {
  state: (): OnboardingUserState => ({
    firstname: '',
  }),

  persist: {
    storage: localStorage
  },
});