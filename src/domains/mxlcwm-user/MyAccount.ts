export enum eImage {
    BoursoBank = "../../assets/mastercard.svg",
    BanquePostale = "BanquePostale",
    CreditAgricole = "CreditAgricole",
    SocieteGenerale = "SocieteGenerale",
    BNPParibas = "BNPParibas"
}

interface IBank {
    which(): eImage;
    key(): number;
    name(): string;
    solde(): Promise<number>;
}

export class BankHandling implements IBank {
    constructor(
        public readonly bankKey: number,
        public readonly bankName: string,
        public bankType: eImage,
        private balance: number
    ) {}

    which(): eImage {
        return this.bankType;
    }

    key(): number {
        return this.bankKey;
    }
    name(): string {
        return this.bankName;
    }
    async solde(): Promise<number> {
        // Simulate async operation
        return new Promise((resolve) => setTimeout(() => resolve(this.balance), 100));
    }

    public getBalance(): number {
        return this.balance;
    }

    updateBalance(newBalance: number): void {
        this.balance = newBalance;
    }
}

interface IUser {
    name(): string;
    email(): string;
    banks(): BankHandling[];
    setName(newName: string): void;
    setEmail(newEmail: string): void;
    addBank(bank: BankHandling): void;
}

export class UserHandling implements IUser {
    private userBanks: BankHandling[];

    constructor(
        private userName: string,
        private userEmail: string,
        banks: BankHandling[] = []
    ) {
        this.userBanks = banks;
    }

    name(): string {
        return this.userName;
    }

    email(): string {
        return this.userEmail;
    }

    banks(): BankHandling[] {
        return this.userBanks;
    }

    setName(newName: string): void {
        this.userName = newName;
    }

    setEmail(newEmail: string): void {
        this.userEmail = newEmail;
    }

    addBank(bank: BankHandling): void {
        // Check if the bank already exists by its key
        if (this.userBanks.some((b) => b.key() === bank.key())) {
            throw new Error("Bank with this key already exists.");
        }
        this.userBanks.push(bank);
    }

    async getBalance(bankKey: number): Promise<number> {
        const bank = this.userBanks.find((b) => b.key() === bankKey);
        if (!bank) {
            throw new Error(`No bank found with key ${bankKey}`);
        }
        return bank.solde();
    }
}
