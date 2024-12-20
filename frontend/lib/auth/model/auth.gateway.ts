export type AuthUser = {
    id: string,
    username: string,
    profilePicture?: string
};

export interface AuthGateway {
    onAuthStateChanged(listener: (authUser: AuthUser) => void): void;
}