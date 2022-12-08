import { Cuenta, Moneda, TipoCuenta } from "./types";

export function filterAccountsByCurrencyAndType(accounts: Cuenta[], acceptedCurrencies: Moneda[], acceptedAccountTypes: TipoCuenta[]): Cuenta[] {
  return accounts.filter((account: Cuenta) => (acceptedCurrencies.includes(account.moneda) && acceptedAccountTypes.includes(account.tipo_letras)) && account);
};

export function calcTotalPages(accountsAmount: number, maxBtnsPerPage: number): number {
  return Math.ceil(accountsAmount / maxBtnsPerPage);
}