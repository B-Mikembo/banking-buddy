import {describe, it} from "vitest"

describe("Feature: Retrieving authenticated user's bank accounts", () => {
    it("Example: Bob is authenticated and can see his bank accounts", ({expect}) => {
        givenAuthenticatedUserIs("Bob");
        givenExistingBankAccounts({
            user: "Bob",
            bankAccounts: [
                {
                    name: "SG",
                    transactions: [
                        {
                            name: "Spotify",
                            amount: -15.00,
                            status: "En cours",
                            date: new Date("2024-12-01T10:00:00.000Z"),
                            category: "Abonnement"
                        }
                    ]
                },
                {
                    name: "BoursoBank",
                    transactions: [
                        {
                            name: "Disney+",
                            amount: -120.00,
                            status: "Succès",
                            date: new Date("2024-01-05T10:00:00.000Z"),
                            category: "Abonnement"
                        }
                    ]
                }
            ]
        });
        await whenRetrievingAuthenticatedUserBankAccounts();

        thenTheReceivedBankAccountShouldBe({
            bankAccounts: [
                {
                    name: "SG",
                    transactions: [
                        {
                            name: "Spotify",
                            amount: -15.00,
                            status: "En cours",
                            date: new Date("2024-12-01T10:00:00.000Z"),
                            category: "Abonnement"
                        }
                    ]
                },
                {
                    name: "BoursoBank",
                    transactions: [
                        {
                            name: "Disney+",
                            amount: -120.00,
                            status: "Succès",
                            date: new Date("2024-01-05T10:00:00.000Z"),
                            category: "Abonnement"
                        }
                    ]
                }
            ]
        })
    });
});