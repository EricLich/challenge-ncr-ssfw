import { Cuenta, Moneda, TipoCuenta } from "./types";

export function filterAccountsByCurrencyAndType(accounts: Cuenta[], acceptedCurrencies: Moneda[], acceptedAccountTypes: TipoCuenta[]): Cuenta[] {
  return accounts.filter((account: Cuenta) => (acceptedCurrencies.includes(account.moneda) && acceptedAccountTypes.includes(account.tipo_letras)) && account);
};

export function createAccountPages(accounts: Cuenta[]): Cuenta[][] {
  const BTNS_PER_FIRST_LAST_PAGE: number = 5;
  const BTNS_PER_MIDDLE_PAGES: number = 4;

  let accountsCopy: Cuenta[] = [...accounts];
  let accountsLevels: Cuenta[][] = [];
  for (let i = 0; i < accountsCopy.length; i++) {
    let numberToBeMinorTo: number;
    let accountsInLevel = [];

    if (accountsCopy.length === accounts.length) {
      numberToBeMinorTo = BTNS_PER_FIRST_LAST_PAGE;
    } else if (accountsCopy.length <= BTNS_PER_FIRST_LAST_PAGE) {
      numberToBeMinorTo = BTNS_PER_FIRST_LAST_PAGE;
    } else if (accountsCopy.length < accounts.length && i > 0) {
      numberToBeMinorTo = BTNS_PER_MIDDLE_PAGES;
    } else {
      numberToBeMinorTo = BTNS_PER_MIDDLE_PAGES;
    }

    for (let j = 0; j < numberToBeMinorTo; j++) {
      accountsInLevel.push(accountsCopy[j]);
    }
    accountsCopy.splice(0, numberToBeMinorTo);
    accountsLevels.push(accountsInLevel.filter(account => account)); //remove undefined values from array before pushing to main list
  }
  return accountsLevels;
};