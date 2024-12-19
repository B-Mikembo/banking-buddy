import { defineStore } from "pinia";

type AccountState = {
    user: string;
    bankAccounts: {
        name: string;
        transactions: {
            name: string;
            amount: Number;
            status: string;
            date: string;
            category: string;
        }[]
    }[]
}

export const useAccountStore = defineStore("account", {
    state: () : AccountState => {
        return {
            user: "",
            bankAccounts: []
        }
    },
    
})