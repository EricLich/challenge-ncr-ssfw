import { Cuenta, Moneda, TipoCuenta } from "./types";

export function filterAccountsByCurrencyAndType(accounts: Cuenta[], acceptedCurrencies: Moneda[], acceptedAccountTypes: TipoCuenta[]): Cuenta[] {
  return accounts.filter((account: Cuenta) => (acceptedCurrencies.includes(account.moneda) && acceptedAccountTypes.includes(account.tipo_letras)) && account);
};

export function createAccountPages(accounts: Cuenta[]): Cuenta[][] {
  let accountsCopy: Cuenta[] = [...accounts];
  let accountsLevels: Cuenta[][] = [];
  for (let i = 0; i < accountsCopy.length; i++) {
    let numberToBeMinorTo: number;
    let accountsInLevel = [];

    if (accountsCopy.length === accounts.length) {
      numberToBeMinorTo = 5;
    } else if (accountsCopy.length <= 5) {
      numberToBeMinorTo = 5;
    } else if (accountsCopy.length < accounts.length && i > 0) {
      numberToBeMinorTo = 4;
    } else {
      numberToBeMinorTo = 4;
    }

    for (let j = 0; j < numberToBeMinorTo; j++) {
      accountsInLevel.push(accountsCopy[j]);
    }
    accountsCopy.splice(0, numberToBeMinorTo);
    accountsLevels.push(accountsInLevel.filter(account => account)); //remove undefined values from array before pushing to main list
  }
  return accountsLevels;
};