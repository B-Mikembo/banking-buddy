import { describe, expect, it } from "vitest";
import { useAccountStore } from "../stores/account.store";

describe("Feature: Retrieving authenticated user's recent transactions by bank account", () => {
  it("Example: Bob is authenticated and can retrieve his first ten recent transactions for BoursoBank and SG", async () => {
    givenAuthenticatedUserId("Bob");
    givenExistingAccount({
      user: "Bob",
      bankAccounts: [
        {
          name: "BoursoBank",
          transactions: [
            {
              name: "Spotify",
              amount: -15.0,
              status: "Succès",
              date: "2024-01-01T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Netflix",
              amount: -6.0,
              status: "Succès",
              date: "2024-01-02T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Disney+",
              amount: -150.0,
              status: "Succès",
              date: "2024-01-03T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Prime",
              amount: -20.0,
              status: "Succès",
              date: "2024-01-04T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Canal+",
              amount: -25.0,
              status: "Succès",
              date: "2024-01-05T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "HBO",
              amount: -20.0,
              status: "Succès",
              date: "2024-01-06T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Paramont+",
              amount: -30.0,
              status: "Succès",
              date: "2024-01-07T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "UGC",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-08T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Fnac+",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-09T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "AppleTV",
              amount: -50.0,
              status: "Succès",
              date: "2024-01-10T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "TCL",
              amount: -25.0,
              status: "Succès",
              date: "2024-01-11T10:00:00.000Z",
              category: "Abonnements",
            },
          ],
        },
        {
          name: "SG",
          transactions: [
            {
              name: "B&M",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-01T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Carrefour Market",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-02T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Leclerc",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-03T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Franprix",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-04T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Action",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-05T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Auchan",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-06T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Carrefou Market",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-07T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Carrefour Market",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-08T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Action",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-09T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Franprix",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-10T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Carrefour Market",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-11T10:00:00.000Z",
              category: "Courses",
            },
          ],
        },
      ],
    });

    await whenRetrievingAuthenticatedUserRecentTransactions();

    thenTheReceivedRecentTransactionsShouldBe({
      user: "Bob",
      bankAccounts: [
        {
          name: "BoursoBank",
          transactions: [
            {
              name: "Netflix",
              amount: -6.0,
              status: "Succès",
              date: "2024-01-02T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Disney+",
              amount: -150.0,
              status: "Succès",
              date: "2024-01-03T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Prime",
              amount: -20.0,
              status: "Succès",
              date: "2024-01-04T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Canal+",
              amount: -25.0,
              status: "Succès",
              date: "2024-01-05T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "HBO",
              amount: -20.0,
              status: "Succès",
              date: "2024-01-06T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Paramont+",
              amount: -30.0,
              status: "Succès",
              date: "2024-01-07T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "UGC",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-08T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "Fnac+",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-09T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "AppleTV",
              amount: -50.0,
              status: "Succès",
              date: "2024-01-10T10:00:00.000Z",
              category: "Abonnements",
            },
            {
              name: "TCL",
              amount: -25.0,
              status: "Succès",
              date: "2024-01-11T10:00:00.000Z",
              category: "Abonnements",
            },
          ],
        },
        {
          name: "SG",
          transactions: [
            {
              name: "Carrefour Market",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-02T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Leclerc",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-03T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Franprix",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-04T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Action",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-05T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Auchan",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-06T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Carrefou Market",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-07T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Carrefour Market",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-08T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Action",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-09T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Franprix",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-10T10:00:00.000Z",
              category: "Courses",
            },
            {
              name: "Carrefour Market",
              amount: -10.0,
              status: "Succès",
              date: "2024-01-11T10:00:00.000Z",
              category: "Courses",
            },
          ],
        },
      ],
    });
  });
});
function givenAuthenticatedUserId(user: string) {
  throw new Error("Function not implemented.");
}

function givenExistingAccount(account: {
  user: string;
  bankAccounts: {
    name: string;
    transactions: {
      name: string;
      amount: number;
      status: string;
      date: string;
      category: string;
    }[];
  }[];
}) {
  throw new Error("Function not implemented.");
}

async function whenRetrievingAuthenticatedUserRecentTransactions() {
  throw new Error("Function not implemented.");
}

function thenTheReceivedRecentTransactionsShouldBe(expectedAccount: {
  user: string;
  bankAccounts: {
    name: string;
    transactions: {
      name: string;
      amount: number;
      status: string;
      date: string;
      category: string;
    }[];
  }[];
}) {
    const authUserAccount = useAccountStore().$state;
  throw new Error("Function not implemented.");
}
