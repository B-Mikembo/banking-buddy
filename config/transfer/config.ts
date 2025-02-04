import { PageManager, type PageSection } from "../pages.config";
import { HeaderBox, TransferForm } from "#components";

export type TransferFormField = {
    key : string;
    selectArray?: Record<string, string>;
    subtitle: string;
    description?: string;
    button?: string;
    must: boolean;
};

const accounts = [
    {
        id: 'acc123',
        availableBalance: 1500.75,
        currentBalance: 2000.0,
        officialName: 'Personal Checking',
        mask: '1234',
        institutionId: 'inst001',
        name: 'Checking Account',
        type: 'depository',
        subtype: 'checking',
        supabaseItemId: 'item001',
        shareableId: 'share123',
    },
    {
        id: 'acc124',
        availableBalance: 5000.0,
        currentBalance: 5200.25,
        officialName: 'Savings Plus',
        mask: '5678',
        institutionId: 'inst002',
        name: 'Savings Account',
        type: 'depository',
        subtype: 'savings',
        supabaseItemId: 'item002',
        shareableId: 'share124',
    },
    {
        id: 'acc125',
        availableBalance: 300.5,
        currentBalance: 300.5,
        officialName: 'Business Credit',
        mask: '9012',
        institutionId: 'inst003',
        name: 'Credit Card',
        type: 'credit',
        subtype: 'credit card',
        supabaseItemId: 'item003',
        shareableId: 'share125',
    },
    ];

const accountDict = accounts.reduce((acc, account) => {
    acc[account.id] = account.officialName;
    return acc;
}, {} as Record<string, string>);

export const transferPageSections = (fstmodel: Record<string, any>, sndmodel: Record<string, any>): PageSection[] => [
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
