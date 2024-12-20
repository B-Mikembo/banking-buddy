import { defineStore } from "pinia";
import { AuthUser } from "./model/auth.gateway";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        authUser: null as AuthUser | null
    }),
    getters: {
        isUserAuthenticated: (state) => state.authUser !== null,
        authUserId: (state) => state.authUser?.id ?? '',
    },
    actions: {
        setAuthUser(authUser: AuthUser) {
            this.authUser = authUser;
        },
    }
});