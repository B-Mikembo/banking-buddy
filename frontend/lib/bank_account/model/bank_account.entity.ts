import { Transaction } from "../../transactions/model/transaction.entity";

/**
 * The BankAccount represents a bank account object with the following properties :
 * - id (string): Unique identifier for the bank account
 * - user (string): Identifier of the user associated with the bank account
 * - transactions (string[]): List of transaction IDs related to the bank account
 */
export type BankAccount = {
    id: string,
    user: string,
    transactions: string[]
};

/**
 * bankAccountsAdapter is a manual implementation of common entity-management operations
 */
export const bankAccountsAdapter = {
    entities: {} as Record<string, BankAccount>,
    /**
     * Adds a single bankAccount to the state
     * @param state Current state object containing bank accounts
     * @param bankAccount The BankAccount object to add
     */
    addOne(state: Record<string, BankAccount>, bankAccount: BankAccount) {
        state[bankAccount.id] = bankAccount;
    },
    /**
     * Adds multiple bank accounts to the `state`
     * @param state Current state object containing bank accounts
     * @param bankAccounts Array of `BankAccount` objects to add
     */
    addMany(state: Record<string, BankAccount>, bankAccounts: BankAccount[]) {
        bankAccounts.forEach((bankAccount) => {
            state[bankAccount.id] = bankAccount;
        });
    },
    /**
     * Updates an existing bank account or adds it if it doesn't exist
     * @param state Current state object containing bank accounts
     * @param bankAccount The `BankAccount` object to upsert
     */
    upsertOne(state: Record<string, BankAccount>, bankAccount: BankAccount) {
        state[bankAccount.id] = { ...state[bankAccount.id], ...bankAccount};
    },
    /**
     * Removes a single bank account by its ID
     * @param state Current state object containing bank accounts
     * @param id The ID of the bank account to remove
     */
    removeOne(state: Record<string, BankAccount>, id: string) {
        delete state[id];
    },
    /**
     * Removes all bank accounts from the state
     * @param state Current state object containing bank accounts
     */
    removeAll(state: Record<string, BankAccount>) {
        Object.keys(state).forEach((key) => delete state[key]);
    }
}