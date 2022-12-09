import React, { createContext, ReactNode, useEffect, useState } from "react";

import { Cuenta, Moneda } from "../utils/types";
import { filterAccountsByCurrencyAndType } from "../utils/functions";

interface AccountsContextValues {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setTotalPages: (totalPages: number) => void;
  maxBtnsPerPage: number;
  accounts: Cuenta[] | [];
  setAccounts: (accounts: Cuenta[]) => void;
}

export const AccountsContext = createContext<AccountsContextValues>({
  totalPages: 0,
  currentPage: 0,
  setCurrentPage: (initial) => {},
  setTotalPages: (initial) => {},
  maxBtnsPerPage: 0,
  accounts: [],
  setAccounts: ([]) => {},
});

type AccountsProps = {
  children?: ReactNode;
};

const AccountsProvider: React.FC<AccountsProps> = ({ children }) => {
  const MAX_BTNS_PER_PAGE: number = 6;
  const [accounts, setAccounts] = useState<Cuenta[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filteredAccounts, setFilteredAccounts] = useState<Cuenta[]>([]);

  useEffect(() => {
    if (accounts.length > 0) {
      setFilteredAccounts(
        filterAccountsByCurrencyAndType(
          accounts,
          [Moneda.ARS, Moneda.USD],
          ["CC", "CA"]
        )
      );
    }
  }, [accounts]);

  return (
    <AccountsContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        accounts: filteredAccounts,
        setAccounts,
        maxBtnsPerPage: MAX_BTNS_PER_PAGE,
      }}
    >
      {children}
    </AccountsContext.Provider>
  );
};

export default AccountsProvider;
