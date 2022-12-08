import React, { createContext, ReactNode, useEffect, useState } from "react";
import {
  calcTotalPages,
  filterAccountsByCurrencyAndType,
} from "../utils/functions";
import { Cuenta, Moneda, tipoCuenta, TipoCuenta } from "../utils/types";

type AccountsContextValues = {
  totalPages: number | null;
  currentPage: number | null;
  setCurrentPage: ((currentPage: number) => void) | undefined;
  maxBtnsPerPage: number | null;
  accounts: Cuenta[];
};

const AccountsContext = createContext<AccountsContextValues>({
  totalPages: null,
  currentPage: null,
  setCurrentPage: undefined,
  maxBtnsPerPage: null,
  accounts: [],
});

type AccountsProps = {
  children: ReactNode;
  accounts: Cuenta[];
};

const MAX_BTNS_PER_PAGE: number = 6;
const FIRST_LAST_PAGE_AMOUNT_BTNS: number = 5;

const Accounts: React.FC<AccountsProps> = ({ children, accounts }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  useEffect(() => {
    const filteredAccounts = filterAccountsByCurrencyAndType(
      accounts,
      [Moneda.ARS, Moneda.USD],
      ["CC", "CA"]
    );
    setTotalPages(
      (prev) =>
        (prev = calcTotalPages(filteredAccounts.length, MAX_BTNS_PER_PAGE))
    );
  }, []);

  return (
    <AccountsContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalPages,
        accounts,
        maxBtnsPerPage: MAX_BTNS_PER_PAGE,
      }}
    >
      <div className="w-full h-[80%]">{children}</div>
    </AccountsContext.Provider>
  );
};

export default Accounts;
