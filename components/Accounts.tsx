import React, { createContext, useEffect, useState } from "react";
import { filterAccountsByCurrencyAndType } from "../utils/functions";
import { Cuenta, Moneda, tipoCuenta, TipoCuenta } from "../utils/types";
import AccountPages from "./AccounstPages";

type AccountsContextValues = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  setTotalPages: (totalPages: number) => void;
  maxBtnsPerPage: number;
  accounts: Cuenta[];
};

export const AccountsContext = createContext<AccountsContextValues>({
  totalPages: 0,
  currentPage: 0,
  setCurrentPage: (initial) => {},
  setTotalPages: (initial) => {},
  maxBtnsPerPage: 0,
  accounts: [],
});

type AccountsProps = {
  accounts: Cuenta[];
};

const MAX_BTNS_PER_PAGE: number = 6;
const BTNS_FIRST_LAST_PAGE: number = 5;

const Accounts: React.FC<AccountsProps> = ({ accounts }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filteredAccounts, setFilteredAccounts] = useState<Cuenta[]>([]);

  useEffect(() => {
    setFilteredAccounts(
      filterAccountsByCurrencyAndType(
        accounts,
        [Moneda.ARS, Moneda.USD],
        ["CC", "CA"]
      )
    );
  }, []);

  return (
    <AccountsContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        accounts: filteredAccounts,
        maxBtnsPerPage: MAX_BTNS_PER_PAGE,
      }}
    >
      <AccountPages />
    </AccountsContext.Provider>
  );
};

export default Accounts;
