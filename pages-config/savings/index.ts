import { PageManager, type PageSection } from "../page-manager";
import { accounts } from "../fakedata";
import { HeaderBox, TransferForm } from "#components";

export type TransferFormField = {
    key : string;
    selectArray?: Record<string, string>;
    subtitle: string;
    description?: string;
    button?: string;
    must: boolean;
};

const accountDict = accounts.reduce((acc, account) => {
    acc[account.id] = account.officialName;
    return acc;
}, {} as Record<string, string>);

export const transferPage = (fstmodel: Record<string, any>, sndmodel: Record<string, any>): PageSection[] => [
    {
        id: "header",
        component: HeaderBox,
        props: {
        type: "title",
        title: "Transfert d'argent",
        subText: "Veuillez fournir les informations nécessaires et en lien avec votre transfert.",
        },
    },
    {
        id: "fstform",
        component: TransferForm,
        props: {
        title: "Informations du transfert",
        subText: "Entrez les informations du formulaire",
        content: [
            {
            key: "fromAccount",
            selectArray: accountDict,
            subtitle: "Sélectionner votre ressource *",
            description: "Choisissez depuis quel compte souhaitez-vous effectuer le transfert",
            button: "Séléctionner une banque",
            must: true,
            },
            {
            key: "note",
            subtitle: "Motif du transfert (Optionnel)",
            description: "Laissez un commentaire",
            must: false,
            },
        ],
        modelValue: fstmodel,
        "onUpdate:modelValue": (newValue: any) => Object.assign(fstmodel, newValue),
        },
    },
    {
        id: "sndform",
        component: TransferForm,
        props: {
        title: "Détails du compte bancaire",
        subText: "Entrez les informations liées au destinataire",
        content: [
            {
            key: "email",
            subtitle: "Adresse email *",
            description: "Entrez l'adresse email du destinataire",
            must: true,
            },
            {
            key: "accountNumber",
            subtitle: "Numéro de compte *",
            description: "Entrez le numéro de compte du destinataire",
            must: true,
            },
            {
            key: "amount",
            subtitle: "Montant *",
            description: "Entrez le montant à transférer",
            must: true,
            },
        ],
        modelValue: sndmodel,
        "onUpdate:modelValue": (newValue: any) => Object.assign(sndmodel, newValue),
        },
    },
];
