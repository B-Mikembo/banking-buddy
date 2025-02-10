import { HeaderBox, Table, TotalBalanceBox } from "#components"
import { accounts, totalCurrentBalance } from "../fakedata"
import type { PageSection } from "../page-manager"

export const homePage = (user : any) : PageSection[] => [
    {
        id: "header",
        component: HeaderBox,
        props: {
            type: "greeting",
            title: "Bienvenue",
            subText: "Accédez et gérez efficacement votre compte et vos transactions.",
            user: user?.firstname
        }
    },
    {
        id: "chart",
        component: TotalBalanceBox,
        props: {
            accounts: accounts,
            totalBanks: accounts?.length,
            totalCurrentBalance: totalCurrentBalance
        }
    },
    {
        id: "table",
        component: Table,
        props: {
            headers: ["name", "rank", "description"],
            values: {
                row1:["frank", "451", "hate mom"],
                row2:["igor", "12", "pro legos"]
            }
        }
    },
]
