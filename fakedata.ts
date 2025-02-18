export const accounts = [
  {
    id: 'acc123',
    availableBalance: 1500.75,
    currentBalance: 2000.0,
    passiveFund: 25,
    activeFund: 800,
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
    passiveFund: 450,
    activeFund: 1000,
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
    passiveFund: 40,
    activeFund: 200,
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

export const totalCurrentBalance = accounts
  .map(account => account.currentBalance)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
export const totalPassiveFund = accounts.reduce(
  (acc, account) => acc + account.passiveFund, 
  0
);
  
export const totalActiveFund = accounts.reduce(
  (acc, account) => acc + account.activeFund, 
  0
);
  
export const passiveFundPercentage = totalCurrentBalance > 0 
  ? (totalPassiveFund / totalCurrentBalance) * 100 
  : 0;
  
export const activeFundPercentage = totalCurrentBalance > 0 
  ? (totalActiveFund / totalCurrentBalance) * 100 
  : 0;