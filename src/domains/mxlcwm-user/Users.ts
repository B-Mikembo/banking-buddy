import { UserHandling, BankHandling, eImage } from "./MyAccount";

const bank1 = new BankHandling(1, "BoursoBank", eImage.BoursoBank, 1000);
const bank2 = new BankHandling(2, "BNPParibas", eImage.BNPParibas, 2000);

export const user = new UserHandling("John Doe", "john@example.com", [bank1]);

// Add a new bank
try {
    user.addBank(bank2);
    console.log("Bank added successfully.");
} catch (error) {
    if (error instanceof Error)
        console.error(error.message);
    else {
        console.error("Error: Unknwon error occured");
    }
}