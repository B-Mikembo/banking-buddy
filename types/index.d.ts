declare type SignUpParams = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  supabaseItemId: string;
  shareableId: string;
}

declare interface signInProps {
  email: string;
  password: string;
}

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}
